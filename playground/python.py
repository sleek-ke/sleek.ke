# Number_Starter = 708534184
# Number_Plus = Number_Starter + 1
# for i in range (5):
# 	while i > 2:
# 		if Number_Plus == Number_Plus:
# 			Number_Plus = Number_Plus + 1
# 			print(Number_Plus+1)


import segno
import random
import string

QrCode_image = segno.make(
            # f'{order_qs.ref_code_confirm}  {RefCode}| {order_qs.start_date}|Mboa-{order_qs.pk}  {pk}|'
'Mboa Technology --Decentralize Everything',)
QrCode_image.save('mboa2.png', dark='red', scale=5, light='#ffffff00')

