import express from "express";
import * as SearchUtil from "./../api-calls/get-reciepes"

//creates a new Router object
const router = express.Router();


router.route('/search')
.get(SearchUtil.getReciepeFromSearch)


export default router;
