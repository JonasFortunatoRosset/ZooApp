from controllers.ingressosController import Ingressos

def ingressos(app):
    app.route('/ingressos', method=['POST','GET'])(Ingressos)