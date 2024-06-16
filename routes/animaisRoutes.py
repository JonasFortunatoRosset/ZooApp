from controllers.animaisController import animaisController

def animais(app):
    app.route('/animais', method=['POST'])(animaisController)