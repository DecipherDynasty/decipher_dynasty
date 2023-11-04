import * as admin from 'firebase-admin'

function initDb() {
  if (admin.apps.length === 0) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SDK as string)
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })
  }

  return admin.firestore()
}

export const db = initDb()
