import assert from "node:assert/strict";
import { test } from "node:test";
import { Room } from "colyseus";

class ThaumacordVisibilityRoom extends Room {
  constructor() {
    super();
    this.audit = [];
    this.participants = [
      { id: "captain", name: "Capitaine", resources: { intel: 1 }, secret: "ordre scelle" },
      { id: "sonar", name: "Station sonar", resources: { intel: 1 }, secret: "contact nord-est" }
    ];
  }

  connectClient(client, audience) {
    client.audience = audience;
    this.clients.push(client);
    client.send("room.connected", this.readModelFor(audience));
  }

  acceptEvent(event) {
    const entry = {
      sequence: this.audit.length + 1,
      type: event.type,
      participantId: event.participantId,
      payload: event.payload ?? {}
    };
    this.audit.push(entry);
    for (const client of this.clients) {
      client.send("event.accepted", {
        audit: entry,
        readModel: this.readModelFor(client.audience)
      });
    }
  }

  readModelFor(audience) {
    if (audience.kind === "dashboard") {
      return {
        readModel: "dashboard",
        participants: this.participants,
        audit: this.audit
      };
    }

    const participant = this.participants.find((candidate) => candidate.id === audience.participantId);
    if (!participant) {
      return {
        readModel: "device.unbound",
        participants: this.participants.map(({ id, name }) => ({ id, name }))
      };
    }

    return {
      readModel: "device.participant",
      participant,
      visibleParticipants: this.participants.map(({ id, name }) => ({ id, name })),
      recentAudit: this.audit
    };
  }
}

function fakeClient(id) {
  return {
    sessionId: id,
    messages: [],
    send(type, payload) {
      this.messages.push({ type, payload });
    }
  };
}

test("a Colyseus room can send filtered per-client read models without shared schema state", () => {
  const room = new ThaumacordVisibilityRoom();
  const dashboard = fakeClient("dashboard");
  const sonar = fakeClient("sonar-device");
  const unbound = fakeClient("unbound-device");

  room.connectClient(dashboard, { kind: "dashboard" });
  room.connectClient(sonar, { kind: "device", participantId: "sonar" });
  room.connectClient(unbound, { kind: "device" });
  room.acceptEvent({ type: "sonar.ping", participantId: "sonar", payload: { bearing: 47 } });

  const dashboardUpdate = dashboard.messages.at(-1).payload.readModel;
  const sonarUpdate = sonar.messages.at(-1).payload.readModel;
  const unboundUpdate = unbound.messages.at(-1).payload.readModel;

  assert.equal(dashboardUpdate.readModel, "dashboard");
  assert.equal(sonarUpdate.readModel, "device.participant");
  assert.equal(unboundUpdate.readModel, "device.unbound");
  assert.equal(dashboardUpdate.participants[1].secret, "contact nord-est");
  assert.equal(sonarUpdate.participant.secret, "contact nord-est");
  assert.equal(unboundUpdate.participants[1].secret, undefined);
  assert.equal(dashboard.messages.at(-1).payload.audit.sequence, 1);
});

