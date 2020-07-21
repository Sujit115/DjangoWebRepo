from django.db import models

# Create your models here.


class BootcampData(models.Model):
	bootcamp_name = models.CharField(max_length=30)
	bootcamp_duration = models.CharField(max_length=30)
	bootcamp_location = models.CharField(max_length=30)
	bootcamp_image = models.ImageField(default=None,upload_to='BootcampPics/',null=False,blank=False)


	def __str__(self):
		return str(self.bootcamp_name)