from django.db import models
from accounts.views import User, UserAddress


msee = User

# Create your models here.
class SendMoney(models.Model):
	user = models.OneToOneField(msee, on_delete=models.CASCADE)
	sent_time = models.DateTimeField(auto_now_add=True)
	Amount = models.DecimalField(decimal_places=2, max_digits='5')
	Recipient = models.ForeignKey(msee, on_delete=models.CASCADE, related_name="SendMoney")
	
	def __str__(self):
		return self.Recipient