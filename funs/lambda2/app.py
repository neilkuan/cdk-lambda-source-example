import requests
def handler(events, contexts):


    try:
        resp = requests.get('http://checkip.amazonaws.com')
    except:
        pass
    return f'docker function {str(resp.content)}'
