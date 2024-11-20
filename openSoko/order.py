import ecdsa
import base64

order_instance = ecdsa.SigningKey.generate(curve=ecdsa.SECP256k1)
private_key = order_instance.to_string().hex()  # convert your private key to hex
vk = order_instance.get_verifying_key()  # this is your verification key (public key)
public_key = vk.to_string().hex()
public_key = base64.b64encode(bytes.fromhex(public_key))
filename = 'MboaEx_keys/Orders/' + private_key + ".txt"
with open(filename, "w") as f:
	f.write(F"/Hey,"
		        F"/Wallet Address Public Key:{public_key.decode()} "
		        F"\nOrder Confirmation  Secret(Don't Share or disclose This to anyone.) / Private Key:{private_key} ")