import requests
import bs4
from flask import Flask
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
import warnings
import time
from flask_cors import CORS

warnings.filterwarnings('ignore')

app = Flask(__name__)
CORS(app)


@app.route('/getproducts/<string:productName>/<string:minPrice>/<string:maxPrice>')
def scrapEbay(productName, minPrice, maxPrice):

    products = []
    prices = []

    try:
        productName = productName.replace(' ', '+')
        productName = productName.replace('/', '%')
        URL = 'https://www.ebay.com/sch/i.html?_from=R40&_nkw=' + str(productName) + '&_sacat=0&rt=nc&_udlo=' + str(minPrice) + '&_udhi=' + str(maxPrice)
        response = requests.get(URL)
        soup = bs4.BeautifulSoup(response.content, 'html.parser')
        products = soup.findAll('div', class_= 's-item__title')
        prices = soup.findAll('span', class_= 's-item__price')
        del products[0]
        del prices[0]
            
    finally:
        productList = []
        priceList = []

        for i in range(50):
            productList.append('n/a')
            priceList.append('n/a')
        
        count = int(0)  
        for each in products:
            productList[count] = each.find('span', {"role":True}).text
            count = count + 1
            if count == 5:
                break
        
        count = int(0) 
        for each in prices:
            priceList[count] = each.text
            count = count + 1
            if count == 5:
                break
        
        myReturn = [{'name':productList[0], 'price':priceList[0]},
                    {'name':productList[1], 'price':priceList[1]},
                    {'name':productList[2], 'price':priceList[2]},
                    {'name':productList[3], 'price':priceList[3]},
                    {'name':productList[4], 'price':priceList[4]}]

        return myReturn

   
@app.route('/resourceproducts/<string:productName>/<string:minPrice>/<string:maxPrice>')
def resourceProducts(productName, minPrice, maxPrice):

    products = []
    prices = []
    lists = []

    try:
        productName = productName.replace(' ', '+')
        productName = productName.replace('/', '%')
        URL = 'https://cjdropshipping.com/search/'+ str(productName) +'.html?pageNum=1&startSellPrice=' + str(minPrice) + '&endSellPrice=' + str(maxPrice)        
        response = requests.get(URL)
        soup = bs4.BeautifulSoup(response.content, 'html.parser')
        products = soup.findAll('a', class_= 'desc detail-anchor')
        prices = soup.findAll('div', class_= 'price')
        lists = soup.findAll('span', class_= 'list')
            
    finally:
        productList = []
        priceList = []
        listsList = []
        linksList = []

        for i in range(5):
            productList.append('n/a')
            priceList.append('n/a')
            listsList.append('n/a')
            linksList.append('n/a')
        
        count = int(0)  
        for each in products:
            productList[count] = each.text
            myUrl = 'https://cjdropshipping.com' + each['href']
            myUrl = myUrl.replace('/', '^')
            linksList[count] = myUrl
            count = count + 1
            if count == 5:
                break
        
        count = int(0) 
        for each in prices:
            priceList[count] = each.text
            count = count + 1
            if count == 5:
                break
            
        count = int(0) 
        for each in lists:
            listsList[count] = each.findAll('span')[1].text
            count = count + 1
            if count == 5:
                break
        
        myReturn = [{'name':productList[0], 'price':priceList[0], 'url':linksList[0], 'list':listsList[0]},
                    {'name':productList[1], 'price':priceList[1], 'url':linksList[1], 'list':listsList[1]},
                    {'name':productList[2], 'price':priceList[2], 'url':linksList[2], 'list':listsList[2]},
                    {'name':productList[3], 'price':priceList[3], 'url':linksList[3], 'list':listsList[3]},
                    {'name':productList[4], 'price':priceList[4], 'url':linksList[4], 'list':listsList[4]},]

        return myReturn

   
@app.route('/listproduct/<string:url>/<string:email>/<string:password>')
def listProduct(url, email, password):
    try:
        options = Options()
        # options.add_argument('--headless')
        options.add_argument('--disable-gpu')
        driver = webdriver.Chrome(options=options)
        driver.maximize_window()
        url = url.replace('^', '/')
        # driver.get('www.google.com')
        # time.sleep(10)
        driver.get(url)

        driver.save_screenshot('first.png')
        
        first = WebDriverWait(driver, 10).until(
                    EC.visibility_of_element_located((By.XPATH, '//*[@id="cj-header-container"]/div[2]/div[1]/div/div[3]/div[1]/a'))
                )
        first.click()

        driver.save_screenshot('second.png')

        second = WebDriverWait(driver, 10).until(
                    EC.visibility_of_element_located((By.XPATH, '/html/body/div[1]/div/div/div/div[2]/form/ul/li[1]/div/input'))
                )
        mystr = str(email) + '\t' + str(password) + '\n'
        second.send_keys(mystr)

        time.sleep(10)

        driver.save_screenshot('third.png')
        
        third = WebDriverWait(driver, 10).until(
                    EC.visibility_of_element_located((By.XPATH, '//*[@id="pd-mid-id"]/div[2]/ng-template/ul/li[11]/p[2]/span/a'))
                )
        third.click()

        time.sleep(10)

        driver.save_screenshot('fourth.png')

        fourth = WebDriverWait(driver, 10).until(
                    EC.visibility_of_element_located((By.XPATH, '//*[@id="variants"]/div/div[1]/div/span[3]'))
                )
        fourth.click()

        time.sleep(10)

        driver.save_screenshot('fifth.png')

        fifth = WebDriverWait(driver, 10).until(
                    EC.visibility_of_element_located((By.XPATH, '//*[@id="merch-list"]/div[2]/div[2]/div[1]/span[1]'))
                )
        fifth.click()

        time.sleep(20)
        driver.quit()
    except Exception as error:
        return "An exception occurred:" + str(error)
    else:
        return "Successful"
    

app.run(debug=True)