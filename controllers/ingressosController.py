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
    
        
    elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_ingressos_id = data['codigo']
                put_ingressos = Ingressos.query.get(put_ingressos_id)
                if put_ingressos is None:
                    return {'error': 'Ingresso não encontrado'}, 404
                put_ingressos.status = data.get('status', put_ingressos.status)
                print(put_ingressos.status)
                db.session.commit()
                return 'Ingresso alterado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar Ingresso. Erro{}'.format(e)}, 400

    elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_ingresso_id = data['codigo']
                delete_ingresso = Ingressos.query.get(delete_ingresso_id)
                if delete_ingresso is None:
                    return {'error': 'Ingresso não encontrado'}, 404
                db.session.delete(delete_ingresso)
                db.session.commit()
                return 'Ingresso deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar ingresso. Erro{}'.format(e)}, 400 