import { Router } from "express";
import { AdminController, EmployeersConstroller } from "../controllers/hospitalStaffControler";

const employeeRouter: Router = Router();

employeeRouter.post('/register', EmployeersConstroller.register);
employeeRouter.put('/edit', EmployeersConstroller.edit)

employeeRouter.get('/careFlow/list', AdminController.listCareFlows);
employeeRouter.get('/list/:employee', EmployeersConstroller.showEmployeers);

employeeRouter.post('/login', EmployeersConstroller.login);
employeeRouter.post('/activateAccount', EmployeersConstroller.activateAccount);

export default employeeRouter;