package fr.maitresinh.thaumacord.nearby

import fr.maitresinh.thaumacord.gesture.CanonicalGestureEvent
import fr.maitresinh.thaumacord.gesture.GestureProximity
import fr.maitresinh.thaumacord.gesture.GestureTransport

typealias NearbyGestureEvent = CanonicalGestureEvent

fun nearbyGestureEvent(
    sessionCode: String,
    sourceDeviceId: String,
    peerDeviceId: String?,
    gesture: String,
    confidence: Float,
    payload: Map<String, String> = emptyMap()
): NearbyGestureEvent =
    CanonicalGestureEvent(
        sessionCode = sessionCode,
        sourceDeviceId = sourceDeviceId,
        targetDeviceId = peerDeviceId,
        gesture = gesture,
        proximity = if (peerDeviceId != null) GestureProximity.Near else GestureProximity.Unknown,
        transport = GestureTransport.NearbyConnections,
        confidence = confidence,
        payload = payload
    )
