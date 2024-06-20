from flask import request
from database.db import db
from models.alimentos import Alimentos

def alimentosController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            alimentos = Alimentos(data['codigo'], data['nome'], data['pesoLote'], data['dataValidade'], data['codFornecedor'])
            db.session.add(alimentos)
            db.session.commit()
            return 'alimentos inserido com sucesso', 200
        except Exception as e:
            return {'error: Erro ao cadastrar os alimentos. Erro: {}'.format(str(e))}, 400
    elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_alimentos_id = data['codigo']
                delete_alimentos = Alimentos.query.get(delete_alimentos_id)
                if delete_alimentos is None:
                    return {'error': 'Alimentos não encontrado'}, 404
                db.session.delete(delete_alimentos)
                db.session.commit()
                return 'Alimentos deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar Alimentos. Erro{}'.format(e)}, 400 
