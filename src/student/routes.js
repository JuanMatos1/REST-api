const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get("/", controller.getStudents)
router.get("/:id", controller.getStudentById); //this means that when we go to the route http://localhost:3000/api/v1/students/, if at the end we add 1 or 2 it takes you to that student
router.post("/", controller.addStudent);
router.put("/:id/name", controller.updateStudent);
router.put("/:id/email", controller.updateStudentEmail);// NOTA IMPORTANTE LEER: el prooblema con que no se podia actualizar el email era porque ela ruta de arriba estaba sobreescribiendo la de abajo y por eso no permitia actualizar. Ahora agregando el :id/email creamos una ruta donde el email se sobreescribe
router.delete("/:id", controller.removeStudent)


router.get('/',(req, res)=>{
    res.send('Using API route');
})

module.exports = router;