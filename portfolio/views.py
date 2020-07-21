from django.shortcuts import render
import json
from . forms import ContactForm
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils import timezone
from django.core import serializers
from django.http import JsonResponse
from django.conf import settings
import os


from .models import *
from django.db.models import Q

def homepage(request):
    if request.method == 'POST':

        form = ContactForm(request.POST)

        # Getting the JSON Data and converting it into its form and saving to the file for later purpose

        val = (request.body).decode('utf-8')

        data = json.loads(val)
      
        with open(os.path.join(settings.BASE_DIR,'userdata/Json/user_data.json'),'a+') as json_file:
            json.dump(data, json_file,indent=4)
            json_file.write('\n')

        # Data Extraction For Sending Mail Purposes

        # name = data.get('name')
        # email = data.get('email')
        # message = data.get('message')
        # print('Got Everything Sending MSG Now')
        # html_mail = render_to_string('mail.html', 

        #     {
        #         'name':name,
        #         'email':email,
        #         'message':message,
        #         'time':timezone.now
        #     }
        #     )
        # send_mail("JiwanBhattarai.com",'','oscarmike286@gmail.com',['oscarmike286@gmail.com'],fail_silently=False,html_message=html_mail)

        # # User Mail

        # client_mail = render_to_string(
        #     'send_user.html',
        #     {
        #         'subject': 'Thanks For Responding',
        #         'message':'Jiwan Sir will be in touch with you shortly.'
        #     }
        #     )
        # send_mail('JiwanBhattrai.Com','','oscarmike286@gmail.com',[email],fail_silently=False,html_message=client_mail)

        # print('working')
    else:

        form = ContactForm()

    return render(request,'homepage.html',{'form':form})





def bootcamp(request):
    query = request.GET.get('query')
    if query is not None:
        print('query',query)
        results = BootcampData.objects.filter(bootcamp_name__icontains=query)
        print(type(results))
        
        if len(results) > 0:
            print('The result is',results)
            return render(request, 'bootcamp.html',context = {'results':results})

        else:    

            print('error')
            return render(request, 'bootcamp.html',context = {'notfound':'Nothing Found'})
            print('eee')        

    else:
        bootcamps = BootcampData.objects.all()
        return render(request, 'bootcamp.html',context = {'bootcamps':bootcamps})



def datalistdatabootcamp(request):
    datas = {}
    for i in BootcampData.objects.all():
        datas[i.pk] = i.bootcamp_name

    return JsonResponse(datas)


