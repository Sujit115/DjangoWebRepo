from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(LevelData)
admin.site.register(ClassContent)
admin.site.register(ClassData)
