from controllers.animaisController import animaisController

def animais(app):
    app.route('/animais', methods=['POST', 'GET', 'PUT', 'DELETE'])(animaisController)