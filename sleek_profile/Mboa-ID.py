import base64
import ecdsa
from pathlib import Path
from django.shortcuts import render, redirect
import bs4
import requests



def index(request):
    if request.method == 'POST':
        addr = request.POST['addr']
        res2 = requests.get('https://cryptowat.ch/')
        soup2 = bs4.BeautifulSoup(res2.text, 'lxml')
        live_price = soup2.find_all('span', {'class': 'price'})
        live_bitcoin_price = live_price[1].getText()
        live_bitcoin_price1 = live_price[1].getText()
        res = requests.get('https://www.blockchain.com/btc/address/' + addr)
        if res:
            soup = bs4.BeautifulSoup(res.text, 'lxml')
            # bal = soup.find_all('span', {'class': 'sc-1ryi78w-0 bFGdFC sc-16b9dsl-1 iIOvXh u3ufsr-0 gXDEBk'})
            bal = soup.find_all('span', {'class': 'sc-1ryi78w-0 gCzMgE sc-16b9dsl-1 kUAhZx u3ufsr-0 fGQJzg'})
            bal[4].getText()
            final_bal = bal[4].getText()
            final_bal1 = final_bal.replace(" ", "").rstrip()[:-3].upper()
            transactions = bal[1].getText()
            total_received = bal[2].getText()
            total_received1 = total_received.replace(" ", "").rstrip()[:-3].upper()
            total_sent = bal[3].getText()
            total_sent1 = total_sent.replace(" ", "").rstrip()[:-3].upper()
            final_bal1_int = float(final_bal1)
            total_received1_int = float(total_received1)
            total_sent1_int = float(total_sent1)
            live_bitcoin_price1_int = float(live_bitcoin_price1)
            
            balance_usd = final_bal1_int * live_bitcoin_price1_int
            total_received_usd = total_received1_int * live_bitcoin_price1_int
            total_sent_usd = total_sent1_int * live_bitcoin_price1_int
        else:
            return redirect('/')
        
        detail = 'MB1000'
        detail.balance = final_bal
        detail.balance1 = final_bal1
        detail.transactions = transactions
        detail.total_received = total_received
        detail.total_received1 = total_received1
        detail.total_sent = total_sent
        detail.total_sent1 = total_sent1
        detail.live_bitcoin_price = live_bitcoin_price
        detail.live_bitcoin_price1 = live_bitcoin_price1
        detail.balance_usd = int(balance_usd)
        detail.total_received_usd = int(total_received_usd)
        detail.total_sent_usd = int(total_sent_usd)
    
    
    else:
        detail = '   '
    
    return render(request, 'index.htm', {'detail': detail})


def MboaID ():
    sk = ecdsa.SigningKey.generate(curve=ecdsa.SECP256k1)  # this is your sign (private key)
    private_key = sk.to_string().hex()  # convert your private key to hex
    vk = sk.get_verifying_key()  # this is your verification key (public key)
    public_key = vk.to_string().hex()
    # we are going to encode the public key to make it shorter
    public_key = base64.b64encode(bytes.fromhex(public_key))
    sk = ecdsa.SigningKey.generate(curve=ecdsa.SECP256k1)  # this is your sign (private key)
    private_key = sk.to_string().hex()  # convert your private key to hex
    vk = sk.get_verifying_key()  # this is your verification key (public key)
    public_key = vk.to_string().hex()
    # we are going to encode the public key to make it shorter
    public_key = base64.b64encode(bytes.fromhex(public_key))

    BASE_DIR = Path(__file__).resolve(strict=True).parent.parent
    filename = BASE_DIR / (input("Enter the name of your new address: ") + '.html')
    with open(filename, "w") as f:
        f.write(F"Private key: {private_key}\nWallet address / Public key: {public_key.decode()}")
    print(F"Your new address and private key are now in the file {filename}")