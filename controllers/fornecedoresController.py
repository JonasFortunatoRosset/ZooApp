from flask import request
from database.db import db
from models.fornecedores import Fornecedores

def fornecedoresController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            fornecedores = Fornecedores(data['codigo'], data['empresa'], data['endereco'], data['telefone'], data['email'])
            db.session.add(fornecedores)
            db.session.commit()
            return 'fornecedores inserido com sucesso', 200
        except Exception as e:
            return {'error: Erro ao cadastrar fornecedores. Erro: {}'.format(str(e))}, 400
    elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_fornecedores_id = data['codigo']
                delete_fornecedor = Fornecedores.query.get(delete_fornecedores_id)
                if delete_fornecedor is None:
                    return {'error': 'Fornecedor não encontrado'}, 404
                db.session.delete(delete_fornecedor)
                db.session.commit()
                return 'Fornecedor deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar Fornecedor. Erro{}'.format(e)}, 400 
