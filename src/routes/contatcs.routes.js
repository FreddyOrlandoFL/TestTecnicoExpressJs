import {Router} from 'express'
import {getContacts} from '../controllers/contacts.controller'
import {createNewContacts} from '../controllers/contacts.controller'

const router= Router()

router.get('/',getContacts)
router.post('/',createNewContacts)
/*router.get('/api/mssql/contactos')
router.delete('/api/mssql/contactos')
router.put('/api/mssql/contactos')
*/
export default router