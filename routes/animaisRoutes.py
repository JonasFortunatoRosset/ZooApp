from controllers.animaisController import Animais

def animais(app):
    app.route('/animais', method=['POST', 'GET'])(Animais)