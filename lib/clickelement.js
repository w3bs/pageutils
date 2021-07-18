'use strict';
var puppeteer = require('puppeteer');
var chalk = require('chalk')
var inquirer = require('inquirer');
var clickElement = async function clickElement(element) {
  var retryCount = 2;
  var i = 0;
  while (i < this.retryCount) {
    try {
      await page.waitForSelector(element);
      return await page.click(element);
    } catch (Exception) {
      try {
        i++;
        await page.waitForSelector(element);
        await page.evaluate('arguments[0].click()', element);
        continue;
      } catch (Exception) {
        i++;
        if (i === retryCount) {
          console.error(chalk.red(
              '\nFailed to clickElement ${element}! some reasons:'));
          throw Exception;
        }
      }
    }
  }
}

exports.clickElement = clickElement;
