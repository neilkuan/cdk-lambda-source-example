import requests
def handler(events, contexts):

    try:
        resp = requests.get('http://checkip.amazonaws.com')
    except:
        pass
    return f'python function {str(resp.content)}'