from django.shortcuts import render
from .models import ClassData, ClassContent, LevelData
from django.http import JsonResponse
from django.core import serializers
import json
# Create your views here.

def NepalOnlineSchool(request):
	if request.method == 'POST':
		print(request.body)
		query = ClassData.objects.filter(class_id=json.loads(request.body.decode('utf-8')).get('subject')).first()
		print(query.particular_class)
		searched_data = query.classcontent_set.all()
		for i in range(len(searched_data)):
			searched_data[i].contributer_image = (searched_data[i].contributer_image.url)
		data = serializers.serialize('json',searched_data)
		json_data = json.loads(data)
		print(json_data)
		field_data = {}
		for i in range(len(json_data)):
			field_data[i] = (json_data[i].get('fields'))
		return JsonResponse({'data':field_data})
	else:
		if request.method == "GET":
			if request.GET.get('Subject'):
				query = ClassData.objects.filter(class_id=request.GET.get('Subject')).first()
				searched_data = query.classcontent_set.all()
				print('yeah working')
				context  = {
					
					'data':searched_data,
					'classes':ClassData.objects.all(),
					'current_drop':request.GET.get('Subject')

				}
				print(context)
				return render(request, 'nepalonlineschool.html',context)

			else:
				context = {
					'classes':ClassData.objects.all()
				}
				return render(request, 'nepalonlineschool.html',context)