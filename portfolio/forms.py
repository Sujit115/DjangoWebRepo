from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(max_length=20)
    email = forms.EmailField(max_length=90)
    message = forms.CharField(max_length=200,widget=forms.Textarea(attrs={'size': '40'}))