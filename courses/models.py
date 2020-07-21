from django.db import models
from PIL import Image
# Create your models here.

class LevelData(models.Model):

	module_name = models.CharField(max_length=20, null=False, blank=False) # Primary, Secondary, Class 11

	def __str__(self):
		return str(self.module_name)

class ClassData(models.Model):
	particular_class = models.ForeignKey(LevelData, on_delete=models.CASCADE)
	class_id = models.CharField(max_length=40, null=False,blank=False)

	def __str__(self):
		return str(self.class_id)

class ClassContent(models.Model):
	
	linked_to = models.ForeignKey(ClassData, on_delete=models.CASCADE)
	title = models.CharField(max_length=200,null=False,blank=False)
	subject_name = models.CharField(max_length=100,null=False,blank=False)
	contributer_name = models.CharField(max_length=100, null=False,blank=False)
	contributer_image = models.ImageField(upload_to='ContributerImage')
	link_to_youtube = models.URLField()

	def save(self):
		print('test1')
		super().save()
		print('test2')
		img = Image.open(self.contributer_image.path)
		if img.height > 195 or img.width > 200:
				req_size = (200,195)
				img.resize(req_size)
				img.save(self.contributer_image.path)
				print('done')

	def __str__(self):
		return str(self.subject_name)	