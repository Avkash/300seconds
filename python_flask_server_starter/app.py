from flask import Flask
from flask_restful import Api, Resource, reqparse
from core.ApiHandler import ApiHandlerFunction

app = Flask(__name__)
api = Api(app)


class RootApi(Resource):
    '''
    curl -X GET http://localhost:3003/v1/hello --header "Content-Type: application/json"
    curl -X POST http://localhost:3003/v1/hello --header "Content-Type: application/json" --data '{"RequestType":"Hello"}'
    '''
    def get(self):
        return {'resultStatus': 'SUCCESS', 'message': 'Hello from RootApi'}

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('RequestType', type=str)
        args = parser.parse_args()

        message = "RequestType: {}".format(args['RequestType'])
        final_result = {'status': 'SUCCESS', 'message': message}
        return final_result


api.add_resource(ApiHandlerFunction, '/v1/bye')
api.add_resource(RootApi, '/v1/hello')
app.run(host="0.0.0.0", port=3003)
