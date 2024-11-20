from segno import  helpers
qr = helpers.make_wifi(ssid='Mboa Technology' , password='12834048%Mboa', security='WPA2 PSK')
qr.save('Mboa-wifi.png' ,dark='green', light='white')
