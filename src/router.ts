import express, { Request, Response, Router } from "express";
import multer from "multer";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { multerConfigPlayer } from "./middlewares/multerConfigPlayer";
import { multerConfigTeam } from "./middlewares/multerConfigTeam";
import { createPlayerController } from "./useCases/player/createPlayer/CreatePlayerController";
import { DeletePlayerController } from "./useCases/player/deletePlayer/controller";
import { GetPlayerByIdController } from "./useCases/player/getPlayerById/Controller";
import { GetPlayersByTeamController } from "./useCases/player/getPlayersByTeam/controller";
import { UpdatePlayerController } from "./useCases/player/updatePlayer/controller";
import { createTeamController } from "./useCases/team/createTeam/createTeamController";
import { GetTeamController } from "./useCases/team/getTeam/GetTeamController";
import { AuthenticateUserController } from "./useCases/user/authenticateUser/controller";
import { CreateUserController } from "./useCases/user/createUser/controller";
import { GetDataUserController } from "./useCases/user/getDataUser/controller";

export const router = Router()

const createTeam = new createTeamController()
const createPlayer = new createPlayerController()
const getTeam = new GetTeamController()
const getPlayerById = new GetPlayerByIdController()
const getPlayerByTeam = new GetPlayersByTeamController()
const createUser = new CreateUserController()
const authentiocateUser = new AuthenticateUserController()
const updatePlayer = new UpdatePlayerController()
const deletePlayer = new DeletePlayerController()
const getDataUser = new GetDataUserController()

const uploadTeam = multer({ storage: multerConfigTeam.storage })
const uploadPlayer = multer({ storage: multerConfigPlayer.storage })


router.post('/create-team', [ensureAuthenticated, uploadTeam.single('shield')], createTeam.handle)
router.get('/get-team/:id', getTeam.handle)

router.post('/create-player', [ensureAuthenticated, uploadPlayer.single('photo')], createPlayer.handle)
router.get('/get-player/:id', ensureAuthenticated, getPlayerById.handle)
router.get('/get-players/:teamId', ensureAuthenticated, getPlayerByTeam.handle)
router.patch('/update-player', ensureAuthenticated,updatePlayer.handle)
router.delete('/delete-player/:id', ensureAuthenticated, deletePlayer.handle)


router.post('/create-user', createUser.handle)
router.post('/authenticate-user', authentiocateUser.handle)
router.get('/get-user/:id', ensureAuthenticated, getDataUser.handle)