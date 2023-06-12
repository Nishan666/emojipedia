import json
import requests
from bs4 import BeautifulSoup

# content is used to store the array of object
content = []

# count is to give the number/key for the emoji(basically count no. of emoji)
counts = 0


# Its an array of links fro emojimeaning website(diff catagory)
emoji_site_links= ["https://www.emojimeanings.net/list-animals-nature-whatsapp",
     "https://www.emojimeanings.net/list-smileys-people-whatsapp",
     "https://www.emojimeanings.net/list-eat-drink-whatsapp",
     "https://www.emojimeanings.net/list-activities-whatsapp",
     "https://www.emojimeanings.net/list-travel-places-whatsapp",
     "https://www.emojimeanings.net/list-objects-whatsapp",
     "https://www.emojimeanings.net/list-symbols-whatsapp"]



# here for loop is used to traverse throught every catagory of emoji from emoji_site_links array
for URL in emoji_site_links:

    # the below code is used to get only the main name from the url,to use it as category
    start_index = URL.find("list-") + len("list-")
    end_index = URL.find("-whatsapp")
    category = URL[start_index:end_index]

    # getting html data fromm url
    page = requests.get(URL)

    # here the BeautifulSoup module is used to access the conent inside the scraped data
    soup = BeautifulSoup(page.content, 'html.parser')           
        
    # getting every <div class="cardsEmojis_img"> from scarped data(soup)
    # it is not used below(for future use)
    imgs = soup.find_all('div', attrs={'class': "cardsEmojis_img"})

    # getting single <div class="d-flex flex-wrap cardsEmojis cardsEmojisWrap"> from scarped data(soup)
    card = soup.find('div', attrs={'class': "d-flex flex-wrap cardsEmojis cardsEmojisWrap"})

    # getting every <article class="card-text"> from scarped data(soup)
    meanings = card.find_all('article', attrs={'class': "card-text"})

    # getting every <header class="card-title"> from scarped data(soup)
    title = soup.find_all('header', attrs={'class': "card-title"})


    # here for loop goes throught every single card of emoji from the given link
    # link1->img-src(link)
    # link2->meaning of emoji
    # link3->title(it has both title and image)
    # link4->category
    for link1 , link2 , link3  in zip(imgs , meanings , title ) :
            
            # below using for loop we separate(split) emoji & title and store it in emoji and title
            ##############
            z = True
            # get only the string out of html element
            for i in link3.strings: 
                  if z == True :
                        emoji = i 
                        z = False
                  else :
                        title = i
            ###############

            # get the meaning text from the <article class="card-text"> -> <section> -> text
            meaning = link2.section.text

            # incrementation of count
            counts+=1

            # creating an object(json)
            emotes ={
                        'id' : counts,
                        'emoji': emoji,
                        'name' : title,
                        'meaning' : meaning,
                        'category' : category
                        }
            
            # adding(appending) created object to an array
            content.append(emotes)

# printing array of object
print(content) 


# creating the file -> emojipedia.js(javascript file) 
# encoding='utf-8' must be used ,or else emoji will be rendered as /%ed3233e4
with open('../React-app/src/emojipedia.js', 'w' ,encoding='utf-8') as f: 

    # write the componets that is needed for react use
    f.write('const emojipedia =\n')   

    # adding the content array to .js file
    json.dump(content, f, ensure_ascii=False) 

    # write the componets that is needed for react use
    f.write('\nexport default emojipedia;') 


# ###################################################
# making id , emoji , name , meaning as variable
# i.e., 'id':46,
#       'name':'happy'
# to
#        id:46,
#        name:'happy'

# basically removing quotes from key (of key,value pair)

# opening the file in read mode
with open('../React-app/src/emojipedia.js', 'r') as file:
    data = file.read()
    data = data.replace('"emoji"', "emoji").replace('"id"',"id").replace('"name"',"name").replace('"meaning"',"meaning").replace('"category"',"category")
    # updated data is stored in data variable

# opening the file in write mode
with open('../React-app/src/emojipedia.js', 'w') as file:
    file.write(data)
      
# #####################################################






