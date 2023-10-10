export const chatCardOptions = [
  {
    title: "Analyse My Chart",
    subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Analyse My Chart",
    subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Analyse My Chart",
    subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    title: "Analyse My Chart",
    subtitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

export const menuOptions: any[] = [
  {
    title: "New Chat",
  },
  {
    title: "Show trading style",
  },
  {
    title: "Settings",
  },
  {
    title: "Share",
  },
  {
    title: "Rename",
  },
  {
    title: "Delete",
  },
];

export const dummyqnaList = [
  {
    link: "https://www.tradingview.com/x/cGwxfu7K/",
    qna: [
      {
        ques: "Can you analyse this trade taken for me and how to get better with the EMA strategy?",
        ans: `The trade taken was on multiple crossovers of 12,26,50,100 which was done correctly,
however when waiting for a close above 200EMA this continues a bullish move which means
a higher RR trade for you. Keep in mind 200EMA is considered strong and waiting for the
second close above 200EMA for move upside is a great practice.`,
      },
      {
        ques: `What else can I implement with the EMA strategy?`,
        ans: `You can use RSI divergence strategy to predict moves earlier which also gives you an
idea about retracements and reversals`,
      },
      {
        ques: `Did I place my stop loss right?`,
        ans: `Stop Loss placement was done according to the last low and for a proper close below the
EMAs which was done correctly.`,
      },
      {
        ques: `Should I wait for retracements after breakout and enter at support of major EMAs?`,
        ans: `It is important to enter on retracements and supports to achieve a higher RR trades,
either entering on support of EMAs, or retracements through fibonacci tools is a good
practice to achieve a higher RR trades and minimising your losses.`,
      },
      {
        ques: `How can I get better and avoid these losses with a higher RR trades as well.`,
        ans: `Sure here are some ways to get better and avoid these losses
1) Try not going your full size on first break and wait for retests of EMAs and them
acting as support to DCA into a trade
2) as soon as your are up by 1R it is always a good idea to put to Stoploss to breakeven
with higher RR trades
3) Try incorporating Fibonacci Retracements into your trades to have a general
perspective of your DCA range`,
      },
    ],
  },
  {
    link: "https://www.tradingview.com/x/9gMYhYbO/",
    qna: [
      {
        ques: "Why did it hit my stop loss?",
        ans: `The trade was taken on the cross of Multiple EMAs which was done correctly. Try to take
high RR trades with less % of your account, or use a bigger stop loss to prevent getting
stopped out. Overall trade taken on your strategy was risky due to a small stop loss.`,
      },
      {
        ques: "What is Fibonacci Retracements and how do we incorporate it?",
        ans: `The Fibonacci Sequence is a series of numbers in which each number is the sum of the
two preceding ones, usually starting with 0 and 1. So, it goes like this: 0, 1, 1, 2, 3, 5, 8, 13,
21, 34, and so on. This sequence has numerous applications in mathematics, science, art,
and even trading.
In trading, Fibonacci levels are used as technical analysis tools to identify potential support
and resistance levels, which can help traders make better decisions regarding entries, exits,
and stop-loss placement. The key Fibonacci levels used in trading are typically:
Fibonacci Retracement Levels: These levels are used to identify potential support
and resistance levels during price corrections within a trend. The common
retracement levels are 23.6%, 38.2%, 50%, 61.8%, and 78.6%.

Fibonacci Extension Levels: These levels are used to project potential price targets
when the price moves beyond its previous high (in an uptrend) or previous low (in a
downtrend). Common extension levels include 127.2%, 161.8%, 261.8%, and
423.6%.

Now, let's discuss how you can incorporate Fibonacci levels with a multiple Exponential
Moving Average (EMA) strategy.
A multiple EMA strategy involves using various EMAs with different time periods to identify
trends and potential entry/exit points in the market. For example, your strategy of EMAs with
periods of 12, 26, 50, 100, and 200.
Here's how you can combine the Fibonacci retracement levels with this EMA strategy:
Identify the Trend: Use the EMAs to identify the prevailing trend. In general, when the
shorter-term EMAs (e.g., 12 and 26) are above the longer-term EMAs (e.g., 50, 100,
and 200), it's considered an uptrend, and when the shorter-term EMAs are below the
longer-term EMAs, it's a downtrend.
Fibonacci Retracement Levels: Once you've identified the trend, you can apply
Fibonacci retracement levels to find potential support or resistance levels within that
trend. For example, during an uptrend, if the price starts to retrace, you can look for
potential entry points near Fibonacci retracement levels such as 38.2% or 50%.
Conversely, during a downtrend, you can look for potential short entry points near
retracement levels.
Confirmation: Always use other technical indicators and analysis to confirm your
trading decisions. Don't solely rely on Fibonacci levels or EMAs. Consider factors like
candlestick patterns, volume analysis, and other relevant indicators.
Risk Management: Implement proper risk management techniques such as setting
stop-loss orders to limit potential losses and take-profit orders to secure profits.
Continuous Monitoring: Continuously monitor your trades and adjust your strategy as
the market evolves. Fibonacci levels can help you set target prices for taking profits.
Generated Response:-
Fibonacci Retracements are a technical analysis tool used to identify potential levels of
support and resistance by plotting horizontal lines at key Fibonacci levels. These levels are
typically 23.6%, 38.2%, 50%, 61.8%, and sometimes 78.6% of a price swing.
How to Incorporate:
1. Identify Swing High and Low: On your chosen timeframe, identify a significant price peak
and trough.
2. Plot Fibonacci: Use your trading platform to draw Fibonacci levels between the swing high
and low.
3. Confluence: Combine these Fibonacci levels with other indicators like EMAs or trendlines
to identify stronger support/resistance zones.
4. Entry and Exit: Use these levels as potential entry or exit points. For example, if price
retraces to the 61.8% level and shows signs of reversing, it might be a good entry point for a
long position.

5. Stop Loss and Take Profit: Place your stop loss below the next Fibonacci level if going
long, or above if going short. For the take profit, you might aim for a previous swing high or
the next Fibonacci extension level.
6. Risk Management: Use the Fibonacci levels to adjust your position sizing in a way that
aligns with your risk tolerance.
7. Backtest: Before incorporating it fully, backtest the strategy to see how well it performs
with your existing system.
By incorporating Fibonacci Retracements, you can refine your entry and exit points, thereby
enhancing your trading strategy.`,
      },
      {
        ques: `this is getting overwhelming, please explain it in short and also put the fibonacci
retracement levels into my trade`,
        ans: `Certainly, here's a shorter explanation with a chart:
The Fibonacci Sequence is a mathematical series used in trading to find potential
support and resistance levels.
To incorporate it with a multiple Exponential Moving Average (EMA) strategy (e.g.,
12, 26, 50, 100, 200):
Use EMAs to identify the trend (uptrend or downtrend).
Apply Fibonacci retracement levels (e.g., 38.2% or 50%) to find potential entry
or exit points along the trend.
Always confirm your trading decisions with other indicators.
Implement risk management with stop-loss and take-profit orders.
Continuously monitor and adjust your strategy as needed.
Combining Fibonacci levels with EMAs can help you make more informed trading
decisions, but remember that trading involves risks, so use caution and proper risk
management.

Generated Response:-
Certainly, let's simplify:
1. **Fibonacci Levels**: Draw Fibonacci levels using the swing high and low close to your
trading period. In your case, from a high before 13/12/2022 and a low before or on that date.
2. **EMA Crossover**: You're already using a 4hr EMA strategy.
3. **Combine**: Look for EMA crossover signals that also occur near a key Fibonacci level
like 61.8% or 38.2% for stronger confirmation.
4. **Entry/Exit**: Enter a trade when EMA crossover coincides with a Fibonacci level. Set
Stop Loss and Take Profit based on nearby Fibonacci levels.
Applying to Your Trade:

- If your entry was at $1276.35, look for the closest Fibonacci level above or below this price
as an additional confirmation or as a level to set your Stop Loss or Take Profit.
By merging both, you can strengthen your trade validation process.`,
      },
    ],
  }
];
