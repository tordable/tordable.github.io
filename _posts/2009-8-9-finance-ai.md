---
layout: post
title: Finance AI
redirect_from:
  - "/projects/finance-ai"
  - "/research/finance-ai"
---

<a href="http://financeai.org">FinanceAI</a> is an open source project with the goal of providing advanced Artificial Intelligence, Statistical and Mathematical tools for amateur and sophisticated investors. The purpose was to develop a complete algorithmic trading platform with comprehensive AI and Quantitative Finance libraries. It would also provide high performance algorithms. I started this project in early 2008, but so far it didn't get past the first version, mostly because of lack of time.

The application that I released is called Predictor. Predictor is a tool that uses financial statements, income statements, balance sheets and cashflow statements and creates powerful pattern classifiers based on that data. Then it uses the classifiers to predict financial performance.

This screenshot shows the results of a training run:

![](/images/predictor-screenshot-1.jpg)

After the classifier is trained, it can be used to classify companies between buy and sell opportunities:

![](/images/predictor-screenshot-2.jpg)

The initial results were inspiring. A porfolio composed only of the three stocks identified as Overweight by Predictor in March, 31st would have a performance considerably better than the SP500. The following chart shows the relative gains. Predictor beated the SP500 by more than 5 points.

![](/images/predictor-performance.jpg)

FinanceAI is open source, and relesed under the Ms-RL license. It is currently hosted in <a href="http://github.com/tordable/FinanceAI">Github</a>.

## Finance AI Goals

The most important goals for FinanceAI are:

* Create a complete and easy to use platform for design, testing and execution of automatic trading algorithms
* Create libraries for Quantitative Finance, Mathematics, Statistics and Artificial Intelligence applied to Finance
* Deliver sub-second real time performance for the whole pipeline for simple algorithms

**Automatic trading platform**

It should be possible to create automatic trading algorithms, from the initial idea to the final implementation in an easy way. These algorithms usually are composed of many components, a main workflow of selection of instruments, valuation of instruments based on certain information, capital allocation, static (initial) and dynamic trading plans, how to respond to concrete phenomena, determine risk analysis criteria, etc. All of these tasks should be easy to do. A complete algorithm should take an amount of code in the hundreds of lines. the level of abstraction of the supporting libraries and tools should be high enough to be able to check indicators with a couple of lines, to test for risk conditions with a few lines, or to create events to respond to risk with a minimal amount of code. Creating automatic trading algorithms should be very easy.

**Support libraries**

The architecture must be very generic, but also it should be possible to optimize it for performance, for example, in message passing. The libraries should include everything necessary to satisfy the first objective, including the usual financial libraries, to calculate features for technical and fundamental analysis, and for modeling and pricing of common financial instruments. Also the more powerful mathematical, statistical and artificial intelligence methods should be available, and easy to use without being an expert.

**Performance**

There are strict time constraints. If a tick in a financial market is every second, then the whole system has to run each step in less than one second (from data gathering to order emission). It would be appropriate to aim for .5 second execution. And keep increasing the number of variables and algorithms until that limit is reached. Later, the number of machines can be increased. The amount of resources required should be approximately _linear. The more values analyzed, or the more algorithms executed, the more processing power and data storage that is necessary in a linear way. Machines should be very independent, the same way that algorithms are mostly independent, and financial instruments are also mostly independent.

These are explicitly not goals of FinanceAI for now:

* High performance AI, mathematical or financial libraries. They are more likely to be used offline. Online algorithm execution should be fast, but this libraries are not likely to be used online
* Interfaces with data suppliers. FIX protocol implementation
* Interfaces with brokers
* Rich and customizable client UI
* Internationalization
* Custom syntax for the creation of trading algorithms, or any other method apart from writing code
* Integration with commercial packages
* Execution in multiple platforms, in particular in platforms other than Windows and .NET

## Finance AI Installation

In order to run Predictor follow this steps:

* Download the <a href="http://github.com/downloads/tordable/FinanceAI/Predictor.zip"> zip file with Predictor</a>
* Unzip, run Setup.exe and follow the instructions
* If Predictor doesn't start, go to Start menu and run FinanceAI / Predictor
* When prompted select the mdf database included in the zip file

You can also download the <a href="http://github.com/tordable/FinanceAI"> source code</a> here. In case the installer finds any error make sure that you have installed the .NET Framework 3.5 and SQL 2005 Express Edition.
