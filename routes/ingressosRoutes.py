from controllers.ingressosController import ingressosController

def ingressos(app):
    app.route('/ingressos', methods=['POST'])(ingressosController)