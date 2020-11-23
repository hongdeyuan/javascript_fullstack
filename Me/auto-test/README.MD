# [Nightwatch](https://nightwatchjs.org/gettingstarted/installation/) 学习


  - 安装Node.js
从nodejs.org：

“ Node.js是基于Chrome的JavaScript运行时构建的平台，可轻松构建快速，可扩展的网络应用程序。Node.js使用事件驱动的非阻塞I / O模型，使其轻巧高效，非常适合数据密集型真实跨分布式设备运行的实时应用程序。”

网站nodejs.org上有大多数主要操作系统的安装软件包和说明。请记住，还要安装npm工具，它是节点包管理器，并随Node.js安装程序一起分发。

- 安装Nightwatch
要使用npm命令行工具安装最新版本，请运行以下命令：

 ``` npm install nightwatch ```
添加-g选项以使nightwatch运行程序在系统中全局可用。
添加--save-dev选项保存nightwatch为devDependency您的package.json。
安装WebDriver
根据您的目标浏览器，您将需要一个特定的WebDriver程序包。您可以从NPM安装以下流行的，也可以单独下载并配置。

从version开始1.3，nightwatch.conf.js如果在当前文件夹中找不到配置文件，则会自动生成一个配置文件。该文件包含可用浏览器驱动程序的所有必要设置，包括与Selenium Server一起运行的设置。
WebDriver二进制	浏览器	描述
壁虎驱动程序	火狐浏览器	实现W3C WebDriver协议以与Gecko浏览器（例如Firefox）通信的独立服务器。
ChromeDriver	谷歌浏览器	实现Chromium的JSON Wire Protocol的独立服务器，但是目前正在过渡到W3C WebDriver规范。

适用于Android上的Chrome和台式机（Mac，Linux，Windows和ChromeOS）上的Chrome。
Microsoft WebDriver	微软Edge	Windows可执行文件，它支持W3C WebDriver规范和JSON Wire Protocol，可以针对Microsoft Edge运行测试。
SafariDriver	微软Edge	该/usr/bin/safaridriver二进制文件已预装在Mac OS的最新版本中，并且可以按照Apple Developer网站上的说明进行使用。

有关“关于Safari的WebDriver”页面上提供了更多信息。
可以通过直接下载二进制文件或使用NPM软件包来完成WebDriver服务的安装。

壁虎驱动程序
可以从NPM轻松安装GeckoDriver，而无需进一步配置。

```npm install geckodriver --save-dev ```
另外，也可以从GitHub上的GeckoDriver Releases页面下载。发行说明也在那里。

ChromeDriver
与GeckoDriver一样，ChromeDriver可以从NPM轻松安装，无需进一步配置。

另外，也可以从ChromeDriver下载页面下载它。

``` npm install chromedriver --save-dev ```
Microsoft WebDriver
WebDriver for Microsoft Edge现在是Windows按需功能。要安装，请在提升的命令提示符下运行以下命令：

DISM.exe /Online /Add-Capability /CapabilityName:Microsoft.WebDriver~~~~0.0.1.0
有关安装和使用文档的更多详细信息，请访问Microsoft WebDriver官方主页。

SafariDriver
该safaridriver二进制文件已经安装在最新版本的Mac OS上，但是在可以针对Safari运行测试之前，需要进行一些手动配置。

在使用safaridriver之前，您需要运行以下命令一次：

safaridriver --enable
有关更多详细信息，请访问Apple Developer网站。

安装Selenium服务器
使用Selenium Standalone Server曾经是管理各种浏览器驱动程序和服务的实际标准，但是不再需要从Nightwatch 1.0开始，也不建议针对单个浏览器进行测试。

如果要在多个浏览器或Selenium Grid环境中并行运行测试，则仅在针对Internet Explorer进行测试时才需要Selenium Server 。

下载Java

Selenium Server是一个Java应用程序，这意味着您还需要安装Java开发工具包（JDK），所需的最低版本为7。您可以java -version从命令行运行以进行检查。

从NPM安装
安装Selenium Server的最简单方法是从NPM。Nightwatch自动配置已经准备就绪，可以与此Chrome，Firefox和Internet Explorer一起使用。

```npm install selenium-server --save-dev```
下载硒
您可以在Selenium下载页面上找到最新的Selenium Server稳定版和Alpha版。

下载selenium-server-standalone-{VERSION}.jar文件，然后使用要测试的浏览器将其放在计算机上。在大多数情况下，这将在本地计算机上，并且通常在项目的源文件夹中。一个好的做法是创建一个单独的子文件夹（例如bin），并将其放置在此处，因为如果要测试多个浏览器，可能必须下载其他驱动程序二进制文件。

自动运行硒
如果服务器在运行Nightwatch的计算机上，则可以由Nightwatch Test Runner直接启动/停止服务器。

手动运行Selenium
要手动运行Selenium Server，请从具有jar的目录中运行以下命令：

```java -jar selenium-server-standalone-{VERSION}.jar```
使用Selenium独立服务器
要查看所有运行时选项，请运行前面的命令并添加-help：

```java -jar selenium-server-standalone-{VERSION}.jar -help```

从Selenium 3开始，FirefoxDriver不再包含在软件包中。另外，从版本48开始，Firefox不再与Selenium 2.x随附的FirefoxDriver兼容。建议Firefox用户使用GeckoDriver进行测试。有关更多信息，请参阅浏览器设置部分。

有关运行Selenium服务器的更多信息，可以在这里找到：https : //selenium.dev/documentation/en/remote_webdriver/remote_webdriver_server

## message: 'Unable to create new service: ChromeDriverService\n' 错误解决

  - 通过 driver.version: unknown这行怀疑是selenium-server没发现chrome驱动。但chrome驱动一直都放在path路径，不可能找不到。后来仔细查看chrome驱动发现缺少执行（x）权限，执行 `chmod +x chromedriver` 添加x权限后，测试成功
  - 驱动版本 与 chrome 浏览器不一致版本： 需要更新对应 版本； 浏览器更或者 驱动更新（[驱动地址](https://npm.taobao.org/mirrors/chromedriver/)）