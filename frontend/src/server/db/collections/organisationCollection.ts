import { db } from '../firebase'

/**
 * When a business entity registers on Scanguard, an organisation object
 * will be created and stored into the database. This organisation object
 * will be used to create events in the future.
 */
export type Organisation = {
  contactNumber: string
  email: string
  name: string
  permission: 'admin' | 'organisation'
}

export const organisationCollection = db.collection('organisations').withConverter({
  toFirestore: (organisation: Organisation) => ({
    contactNumber: organisation.contactNumber,
    email: organisation.email,
    fullName: organisation.name,
    permission: organisation.permission
  }),
  fromFirestore: (snapshot: FirebaseFirestore.QueryDocumentSnapshot) => snapshot.data() as Organisation
})
