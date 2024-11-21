import ecdsa
import base64


User_AccountOpen_instance = ecdsa.SigningKey.generate(curve=ecdsa.SECP256k1)
private_key = User_AccountOpen_instance.to_string().hex()  # convert your private key to hex
vk = User_AccountOpen_instance.get_verifying_key()  # this is your verification key (public key)
public_key_one = vk.to_string().hex()
public_key_two = base64.b64encode(bytes.fromhex(public_key_one))
public_key = public_key_two.decode()

filename = 'sleek_keys_logs/' + private_key + ".txt"
with open(filename, "w") as f:
	f.write(F"/Wallet Secret|Private Key:"
				F"(Don't Share or disclose This to anyone.) {private_key}" F"\nWallet  Address/ Public Key: {public_key}")