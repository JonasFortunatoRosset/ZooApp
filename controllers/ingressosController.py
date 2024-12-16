from flask import request
from database.db import db
from models.ingressos import Ingressos

def ingressosController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            ingressos = Ingressos(codigo=data['codigo'], tipo=data['tipo'], status=data['status'], codusuario=data['codusuario'])
            db.session.add(ingressos)
            db.session.commit()
            return 'Ingresso inserido com sucesso', 200
        except Exception as e:
            return {'error: Erro ao cadastrar ingresso. Erro: {}'.format(str(e))}, 400
    
    elif request.method == 'GET':
        try:
            data = Ingressos.query.all()
            ingresso = {'ingressos': [ingressos.to_dict() for ingressos in data]}
            return ingresso

        except Exception as e:
            return 'Não foi possível buscar usuários. Error: {}'.format(str(e)), 405
        
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
            codigo = request.args.get('codigo')
            delete_ingresso = Ingressos.query.get(codigo)
            if delete_ingresso is None:
                return {'error': 'Ingresso não encontrado'}, 404
            db.session.delete(delete_ingresso)
            db.session.commit()
            return 'Ingresso deletado com sucesso', 200
        except Exception as e:
            return {'error': 'Erro ao deletar Ingresso. Erro{}'.format(e)}, 400