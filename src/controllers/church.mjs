import GenericController from "#controllers/genericController.mjs";

class ChurchController extends GenericController {
  constructor(Model) {
    super(Model, "_paroquia");
  }
}

export default ChurchController;
