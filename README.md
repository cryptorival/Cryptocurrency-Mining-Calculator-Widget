# Cryptocurrency Mining Calculator Widget
A customizable cryptocurrency mining widget for your website, supporting various coins including bitcoin, ethereum, litecoin, dash, monero and all of the below:

![Mining Calculator Widgets](https://cryptorival.s3.amazonaws.com/media/cryptocurrency-mining-widget-currencies.png)

## Widget Preview
Here is an example of a bitcoin widget and an ethereum widget.
![Bitcoin Mining Calculator Widget](https://cryptorival.s3.amazonaws.com/media/mining-calc-widget.png)

Here is an example of a bitcoin widget and an ethereum widget results.
![Bitcoin Mining Calaculator Widget](https://cryptorival.s3.amazonaws.com/media/mining-calc-widget-result.png)

## Installation

##### Copy paste this code in your HTML, learn about customization option below.
```html
<!-- CryptoRival Calculator Widget BEGIN -->
<script type="text/javascript" src="https://static.cryptorival.com/js/calcwidget.js"></script>
<a id="cr-copyright" href="https://cryptorival.com/" target="_blank" rel="nofollow">Powered by CryptoRival</a>
<script type="text/javascript">
showCalc('bitcoin', '500', false, '0', 'ff7f24', 'ff7f24', 'ff7f24', '4e9f15', '09c', 'f0ad4e', 'd9534f', 'f5f5f5', 'eee');
</script>
<!-- CryptoRival Calculator Widget END -->
```

### Customization
Below is all of the options you can use to customize the widget. Change the variables within showCalc to your chosen settings.

**showCalc**(*calc*, *width*, *autosize*, *borderwidth*, *bordercolor*, *calcButtonColor*, *backButtonColor*,
	*dailyColor*, *weeklyColor*, *monthlyColor*, *yearlyColor*, *backColor*, *addonColor*);


### Options

#### calc
_This allows you to choose which coin the mining widget should display, your choices are:_
* 'bitcoin'
* 'dash'
* 'ethereum'
* 'ethereumclassic'
* 'litecoin'
* 'monero'
* 'zcash'
* 'pascal'
* 'siacoin'
* 'bitconnectcoin'
* 'ubiq'
* 'doge'
* 'bitcoincash'
* 'bytecoin'
* 'komodo'
* 'metaverseetp'
* 'bitcoingold'
* 'aeon'
* 'gamecredits'
* 'gulden'
* 'peercoin'
* 'startcoin'
* 'expanse'
* 'digitalnote'
* 'zclassic'
* 'monacoin'
* 'zencash'
* 'einsteinium'
* 'viacoin'
* 'feathercoin'
* 'mooncoin'
* 'bitsend'
* 'musicoin'
* 'bitcoinz'
* 'sumokoin'
* 'hush'
* 'cannabiscoin'
* 'dnotes'
* 'ellaism'
* 'dinastycoin'
* 'linx'
* 'worldcoin'
* 'zetacoin'
* 'bata'
* 'influxcoin'
* 'phoenixcoin'
* 'onix'
* 'pascallite'

#### width
_Set the widget width in pixels, this is ignored if autosize is set to true_
* '500'

#### autosize
_Whether the widget will autosize to 100%_
* true
* false

#### borderwidth
_Set the border width in pixels, no border will show if set to '0'_
* '1'

#### bordercolor
_Set the border hex code color. This is ignored if 'borderwidth' is set to 0_
* 'ff7f24'

#### calcButtonColor
_Set the calculate button hex code color_
* 'ff7f24'

#### backButtonColor
_Set the back button hex code color_
* 'ff7f24'

#### dailyColor
_Set the daily tab of the results screen accent hex code color_
* 'ff7f24'

#### weeklyColor
_Set the weekly tab of the results screen accent hex code color_
* '4e9f15'

#### monthlyColor
_Set the monthly tab of the results screen accent hex code color_
* '0099cc'

#### yearlyColor
_Set the yearly tab of the results screen accent hex code color_
* 'd9534f'

#### backColor
_Set the background hex code color of the entire widget_
* 'f5f5f5'

#### addonColor
_Set the background hex code color of the symbols next to inputs, i.e $, % and hashrate dropdown_
* 'eeeeee'

### Customize Design Online Tool

Take a look at our website for an online tool to help customize your widget and see how it will appear. [https://cryptorival.com/widgets/](https://cryptorival.com/widgets/)

![Mining Calculator Widget Customize](https://cryptorival.s3.amazonaws.com/media/mining-calc-widget-customize-tool.png)
