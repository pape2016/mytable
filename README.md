# mytable

**Lastest Update:**

I found the reason why the table was not shown.
I imported vue by js file as: 
```Javascript
<script src="js/standard/vue.js"></script>
```
it was ok, the components of element ui works, but now, it does not work for the table of element 2.9.1, it makes the table disappear.
we must import vue by:
```Javascript
import Vue from 'vue'
```
Then, the table appears.

Please note that, before version 2.9.0(include 2.9.0), Element UI can display the table when importing vue by js file, it only happens in version 2.9.1.

I have modified the project and now it works.


reproduce el-table issue

# Install
## 1. clone the project
git clone https://github.com/pape2016/mytable.git

## 2. install dependency packages
cd mytable

npm install

## 3. change the output folder
modify the output folder to any folder you want.

the default folder is c:/project/mytable/dist

## 4. webpack
webpack --progress

## 5. open the website
go to the output folder, open the file index.html

## 6. no table
there is no table showing, but if you check the source code of website, the table is there, but it is an empty table.
```html
<div class="el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%;">
    <div class="hidden-columns">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="el-table__header-wrapper">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__header">
            <colgroup>
                <col name="gutter" width="0">
            </colgroup>
            <thead class="has-gutter">
                <tr class="">
                    <th class="gutter" style="width: 0px; display: none;"></th>
                </tr>
            </thead>
        </table>
    </div>
    <div class="el-table__body-wrapper is-scrolling-none">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body">
            <colgroup></colgroup>
            <tbody>
                <tr class="el-table__row"></tr>
                <tr class="el-table__row"></tr>
                <tr class="el-table__row"></tr>
                <tr class="el-table__row"></tr>
                <!---->
            </tbody>
        </table>
        <!---->
        <!---->
    </div>
    <!---->
    <!---->
    <!---->
    <!---->
    <div class="el-table__column-resize-proxy" style="display: none;"></div>
</div>
```
