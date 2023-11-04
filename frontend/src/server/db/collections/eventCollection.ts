import { db } from '../firebase'

export type Event = {
  eventDescription: string
  eventEndDate: FirebaseFirestore.Timestamp
  eventLocation: string
  eventName: string
  eventStartDate: FirebaseFirestore.Timestamp
  intendedAmountToRaise: number
  isVerified: boolean
  organisationId: string
}

export const eventCollection = db.collection('events').withConverter({
  toFirestore: (event: Event) => ({
    eventDescription: event.eventDescription,
    eventEndDate: event.eventEndDate,
    eventLocation: event.eventLocation,
    eventName: event.eventName,
    eventStartDate: event.eventStartDate,
    intendedAmountToRaise: event.intendedAmountToRaise,
    isVerified: event.isVerified,
    organisationId: event.organisationId
  }),
  fromFirestore: (snapshot: FirebaseFirestore.QueryDocumentSnapshot) => snapshot.data() as Event
})
