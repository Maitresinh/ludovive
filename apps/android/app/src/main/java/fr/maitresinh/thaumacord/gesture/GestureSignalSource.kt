package fr.maitresinh.thaumacord.gesture

interface GestureSignalSource {
    val transport: GestureTransport
    fun start(sessionCode: String, localDeviceId: String, emit: (CanonicalGestureEvent) -> Unit)
    fun stop()
}
