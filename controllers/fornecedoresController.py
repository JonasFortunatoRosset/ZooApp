from flask import request
from database.db import db
from models.fornecedores import Fornecedores

def fornecedoresController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            fornecedores = Fornecedores(data['nome'])
            db.session.add(fornecedores)
            db.session.commit()
            return 'fornecedores inserido com sucesso', 200
        except Exception as e:
            return {'error: Erro ao cadastrar fornecedores. Erro: {}'.format(str(e))}, 400