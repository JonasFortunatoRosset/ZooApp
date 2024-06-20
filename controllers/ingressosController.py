from flask import request
from database.db import db
from models.ingressos import Ingressos

def ingressosController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            ingressos = Ingressos(data['codigo'], data['tipo'], data['status'], data['codusuario'])
            db.session.add(ingressos)
            db.session.commit()
            return 'Ingresso inserido com sucesso', 200
        except Exception as e:
            return {'error: Erro ao cadastrar ingresso. Erro: {}'.format(str(e))}, 400