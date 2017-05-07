---
layout: post
title: Guice and Dependency Injection
---

<p>
Recently I've been learning a little bit about Google Guice (pronounced like
juice) and dependency injection. In case you are not
familiar with dependency injection, a good introduction is this
article by
<a href="http://martinfowler.com/articles/injection.html">
  Martin Fowler</a>.
</p>

<p>
Guice is a framework for dependency injection in Java made by
Google. It's well explained in the talk below, which Jesse Wilson
and Dhanji Prasanna gave at Google IO a few years back.
</p>

<iframe class="big" width="600" height="450" frameborder="0" allowfullscreen
 src="https://www.youtube.com/embed/hBVJbzAagfs">
</iframe>

<p>
Guice provides <em>@</em> annotations for constructs that would take longer to build using plain Java. For example
<em>@Singleton</em> seems very useful, as well as
<em>@RequestScoped</em> and <em>@SessionScoped</em>
in App Engine applications. I can see how these can make the
code simpler for experts in Guice. But they can also make the
learning curve steeper for programmers that are not so well 
versed in dependency injection.
</p>

<p>
Guice has advantages and disadvantages with respect to
other techniques.
For example, it encourages use of interfaces and well defined
APIs which results in stronger compartmentalization.
However, it requires the creation of Module classes to register
injection bindings. These classes must have knowledge of whole
systems, and are closely tied to many other classes, somehow
weakening the compartmentalization. Another example,
one would need
to look at least in two places to understand how a request in one
class is executed in another class. This is because the dependency
is not listed in the class itself. If every dependency is handled
though injection this may be cumbersome.
</p>

<p>
If all that was confusing, here is a code sample:
</p>

<p>
<strong>Demo.java</strong>
</p>

``` java
import com.google.inject.Guice;
import com.google.inject.Injector;

/**
 * Guice demo. Get an instance of the billing service through injection
 * and use it. The {@link DemoModule} sets up the {@link BillingService}
 * with the correct bindings.
 */
public class Demo {

  /**
   * Launch the Guice demo. Create a billing service and use it.
   *
   * @param args ignored.
   */
  public static void main(String args[]) {
    Injector injector = Guice.createInjector(new DemoModule());
    BillingService billingService =
        injector.getInstance(BillingService.class);
    billingService.chargeOrder(1234);
  }
}
```

<p>
<strong>DemoModule.java</strong>
</p>


``` java
import com.google.inject.AbstractModule;

/**
 * The {@code DemoModule} will set up the Guice bindings for the Demo
 * application.
 */
public class DemoModule extends AbstractModule {

  @Override
  protected void configure() {
    // Whenever a Transaction Processor is needed, return a
    // real transaction processor.
    bind(TransactionProcessor.class).to(RealTransactionProcessor.class);
  }
}
```


<p>
<strong>BillingService.java</strong>
</p>


``` java
import com.google.inject.Inject;

import java.util.logging.Logger;

/**
 * The {@code BillingService} allows charging a given amount. In order to
 * do that it relies on a {@link TransactionProcessor} to actually process
 * the transaction.
 */
public class BillingService {

  private final Logger logger =
    Logger.getLogger(BillingService.class.getName());

  // The actual processor that will execute the transaction.
  private final TransactionProcessor processor;

  @Inject
  public BillingService(TransactionProcessor processor) {
    this.processor = processor;
  }

  /**
   * Charge the given amount.
   *
   * @param amount is the currency amount to charge.
   * @returns {@code true} if successful, {@code false} if not.
   */
  public boolean chargeOrder(int amount) {
    logger.info("Billing service charging amount.");
    return processor.charge(amount);
  }
}
```


<p>
<strong>BillingServiceTest.java</strong>
</p>


``` java
import com.google.inject.AbstractModule;
import com.google.inject.Guice;
import com.google.inject.Injector;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertThat;
import static org.hamcrest.core.Is.is;

import java.util.logging.Logger;

/**
 * Tests for {@link BillingService}.
 */
public class BillingServiceTest {

  private BillingService billingService;

  @Before
  public void setUp() {
    // Set up the BillingService injecting a mock transaction processor.
    Injector injector = Guice.createInjector(new TestModule());
    billingService = injector.getInstance(BillingService.class);
  }

  /**
   * Binding overrides with mock test classes.
   */
  private class TestModule extends AbstractModule {

    @Override
    protected void configure() {
      bind(TransactionProcessor.class).to(MockTransactionProcessor.class);
    }
  }

  @Test
  public void testChargeBillingService() {
    assertThat(billingService.chargeOrder(1234), is(true));
  }
}
```


<p>
You can learn more about Guice
<a href="http://code.google.com/p/google-guice/">here</a>.
</p>
