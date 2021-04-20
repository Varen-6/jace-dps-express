# Підсистема документування. Аналіз предметної області

## 1. Вступ

Даний документ надає описову інформацію по використаним програмним засобам при розробці підсистеми документування. Тобто, тут розміщено основні визначення та опис ПЗ, які використані у проекті.

## 2. Формат файлів для генерації веб-сторінки.
### 2.1 Загальний опис NJK

* [NJK](https://www.filesuffix.com/ru/extension/njk)(Nunjucks Template) - це потужний шаблонний механізм з успадкуванням, асинхронним управлінням в JavaScript.
* Механізм Nunjucks широко використовується у генерації HTML
* Використання API конфігурації
* За допомогою окремих шаблонів можна створити веб-сторінку
* [Офіційна документація по використанню nunjucks](https://mozilla.github.io/nunjucks/getting-started.html)
### 2.2Templating
* Можливе використання будь-якого розширення файлу, яке ви хочете для ваших файлів шаблонів Nunjucks, співтовариство Nunjucks прийняло .njk  
#### 2.2.1 Підсвічування синтаксису  
Посилання на на модулі
* [atom]( https://github.com/alohaas/language-nunjucks)
* [vim](https://github.com/niftylettuce/vim-jinja)
* [brackets](https://github.com/axelboc/nunjucks-brackets)
* [sublime](https://github.com/mogga/sublime-nunjucks/blob/master/Nunjucks.tmLanguage)
* [emacs](http://web-mode.org)
* [vscode](https://github.com/ronnidc/vscode-nunjucks)  
#### 2.2.2 Приклади наслідування шаблону  
* Успадкування шаблонів - це спосіб спростити повторне використання коду. Під час написання шаблону ви можете визначити "блоки", які можуть замінити дочірні шаблони . Ланцюжок успадкування може бути скільки завгодно довгим.  
Якщо у нас є шаблон parent.html, який виглядає так:
```javascript
{% block header %}
This is the default content
{% endblock %}

<section class="left">
  {% block left %}{% endblock %}
</section>

<section class="right">
  {% block right %}
  This is more content
  {% endblock %}
</section>
``` 




