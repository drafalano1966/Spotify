(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'sqldelight-runtime-js-legacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'sqldelight-runtime-js-legacy'.");
    }root['sqldelight-runtime-js-legacy'] = factory(typeof this['sqldelight-runtime-js-legacy'] === 'undefined' ? {} : this['sqldelight-runtime-js-legacy'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var equals = Kotlin.equals;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var NullPointerException = Kotlin.kotlin.NullPointerException;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Throwable = Error;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var toString = Kotlin.toString;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var Unit = Kotlin.kotlin.Unit;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var L0 = Kotlin.Long.ZERO;
  SimpleQuery.prototype = Object.create(Query_1.prototype);
  SimpleQuery.prototype.constructor = SimpleQuery;
  RollbackException.prototype = Object.create(Throwable.prototype);
  RollbackException.prototype.constructor = RollbackException;
  AtomicBoolean.prototype = Object.create(Atomic.prototype);
  AtomicBoolean.prototype.constructor = AtomicBoolean;
  function ColumnAdapter() {
  }
  ColumnAdapter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ColumnAdapter',
    interfaces: []
  };
  function EnumColumnAdapter(enumValues) {
    this.enumValues_0 = enumValues;
  }
  EnumColumnAdapter.prototype.decode_11rc$ = function (databaseValue) {
    var $receiver = this.enumValues_0;
    var first$result;
    first$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (equals(element.name, databaseValue)) {
          first$result = element;
          break first$break;
        }}
      throw new NoSuchElementException_init('Array contains no element matching the predicate.');
    }
     while (false);
    return first$result;
  };
  EnumColumnAdapter.prototype.encode_trkh7z$ = function (value) {
    return value.name;
  };
  EnumColumnAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EnumColumnAdapter',
    interfaces: [ColumnAdapter]
  };
  var EnumColumnAdapter_0 = defineInlineFunction('sqldelight-runtime-js-legacy.com.squareup.sqldelight.EnumColumnAdapter_nxd2ia$', wrapFunction(function () {
    var EnumColumnAdapter_init = _.com.squareup.sqldelight.EnumColumnAdapter;
    return function (T_0, isT) {
      return new EnumColumnAdapter_init(T_0.values());
    };
  }));
  function Query(identifier, queries, driver, query, mapper) {
    return Query_0(identifier, queries, driver, 'unknown', 'unknown', query, mapper);
  }
  function Query_0(identifier, queries, driver, fileName, label, query, mapper) {
    return new SimpleQuery(identifier, queries, driver, fileName, label, query, mapper);
  }
  function SimpleQuery(identifier, queries, driver, fileName, label, query, mapper) {
    Query_1.call(this, queries, mapper);
    this.identifier_0 = identifier;
    this.driver_0 = driver;
    this.fileName_0 = fileName;
    this.label_0 = label;
    this.query_0 = query;
  }
  SimpleQuery.prototype.execute = function () {
    return this.driver_0.executeQuery_y7hrwn$(this.identifier_0, this.query_0, 0);
  };
  SimpleQuery.prototype.toString = function () {
    return this.fileName_0 + ':' + this.label_0;
  };
  SimpleQuery.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimpleQuery',
    interfaces: [Query_1]
  };
  function Query_1(queries, mapper) {
    this.queries_hw8ylk$_0 = queries;
    this.mapper = mapper;
    this.listenerLock_2fvhhz$_0 = new QueryLock();
    this.listeners_gc8bvj$_0 = copyOnWriteList_0();
  }
  Query_1.prototype.notifyDataChanged = function () {
    var tmp$;
    tmp$ = this.listeners_gc8bvj$_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.queryResultsChanged();
    }
  };
  Query_1.prototype.addListener_oql060$ = function (listener) {
    if (this.listeners_gc8bvj$_0.isEmpty())
      this.queries_hw8ylk$_0.add_11rb$(this);
    this.listeners_gc8bvj$_0.add_11rb$(listener);
  };
  Query_1.prototype.removeListener_oql060$ = function (listener) {
    this.listeners_gc8bvj$_0.remove_11rb$(listener);
    if (this.listeners_gc8bvj$_0.isEmpty())
      this.queries_hw8ylk$_0.remove_11rb$(this);
  };
  Query_1.prototype.executeAsList = function () {
    var result = ArrayList_init();
    var $receiver = this.execute();
    var exception = null;
    try {
      while ($receiver.next())
        result.add_11rb$(this.mapper($receiver));
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        exception = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if ($receiver != null)
        if (exception == null)
          $receiver.close();
        else
          try {
            $receiver.close();
          } catch (closeException) {
            if (!Kotlin.isType(closeException, Throwable))
              throw closeException;
          }
    }
    return result;
  };
  Query_1.prototype.executeAsOne = function () {
    var tmp$;
    tmp$ = this.executeAsOneOrNull();
    if (tmp$ == null) {
      throw new NullPointerException('ResultSet returned null for ' + this);
    }return tmp$;
  };
  Query_1.prototype.executeAsOneOrNull = function () {
    var $receiver = this.execute();
    var exception = null;
    try {
      if (!$receiver.next())
        return null;
      var item = this.mapper($receiver);
      if (!!$receiver.next()) {
        var message = 'ResultSet returned more than 1 row for ' + this;
        throw IllegalStateException_init(message.toString());
      }return item;
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        exception = e;
        throw e;
      } else
        throw e;
    }
    finally {
      if ($receiver != null)
        if (exception == null)
          $receiver.close();
        else
          try {
            $receiver.close();
          } catch (closeException) {
            if (!Kotlin.isType(closeException, Throwable))
              throw closeException;
          }
    }
  };
  function Query$Listener() {
  }
  Query$Listener.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Listener',
    interfaces: []
  };
  Query_1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Query',
    interfaces: []
  };
  function TransactionCallbacks() {
  }
  TransactionCallbacks.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TransactionCallbacks',
    interfaces: []
  };
  function TransactionWithReturn() {
  }
  TransactionWithReturn.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TransactionWithReturn',
    interfaces: [TransactionCallbacks]
  };
  function TransactionWithoutReturn() {
  }
  TransactionWithoutReturn.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TransactionWithoutReturn',
    interfaces: [TransactionCallbacks]
  };
  function Transacter() {
  }
  Transacter.prototype.transactionWithResult_m15s25$ = function (noEnclosing, bodyWithReturn, callback$default) {
    if (noEnclosing === void 0)
      noEnclosing = false;
    return callback$default ? callback$default(noEnclosing, bodyWithReturn) : this.transactionWithResult_m15s25$$default(noEnclosing, bodyWithReturn);
  };
  Transacter.prototype.transaction_oxxknm$ = function (noEnclosing, body, callback$default) {
    if (noEnclosing === void 0)
      noEnclosing = false;
    callback$default ? callback$default(noEnclosing, body) : this.transaction_oxxknm$$default(noEnclosing, body);
  };
  function Transacter$Transaction() {
    this.ownerThreadId_xev1jp$_0 = currentThreadId();
    this.postCommitHooks_8be2vx$ = ArrayList_init();
    this.postRollbackHooks_8be2vx$ = ArrayList_init();
    this.queriesFuncs_8be2vx$ = LinkedHashMap_init();
    this.successful_8be2vx$ = false;
    this.childrenSuccessful_8be2vx$ = true;
    this.transacter_8be2vx$ = null;
  }
  Transacter$Transaction.prototype.enclosingTransaction_8be2vx$ = function () {
    return this.enclosingTransaction;
  };
  Transacter$Transaction.prototype.endTransaction_8be2vx$ = function () {
    this.checkThreadConfinement_8be2vx$();
    this.endTransaction_6taknv$(this.successful_8be2vx$ && this.childrenSuccessful_8be2vx$);
  };
  Transacter$Transaction.prototype.afterCommit_o14v8n$ = function (function_0) {
    this.checkThreadConfinement_8be2vx$();
    this.postCommitHooks_8be2vx$.add_11rb$(function_0);
  };
  Transacter$Transaction.prototype.afterRollback_o14v8n$ = function (function_0) {
    this.checkThreadConfinement_8be2vx$();
    this.postRollbackHooks_8be2vx$.add_11rb$(function_0);
  };
  Transacter$Transaction.prototype.checkThreadConfinement_8be2vx$ = function () {
    if (!equals(this.ownerThreadId_xev1jp$_0, currentThreadId())) {
      var message = trimIndent('\n        Transaction objects (`TransactionWithReturn` and `TransactionWithoutReturn`) must be used\n        only within the transaction lambda scope.\n      ');
      throw IllegalStateException_init(message.toString());
    }};
  Transacter$Transaction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transaction',
    interfaces: [TransactionCallbacks]
  };
  Transacter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Transacter',
    interfaces: []
  };
  function RollbackException(value) {
    if (value === void 0)
      value = null;
    Throwable.call(this);
    this.message_11bw3w$_0 = void 0;
    this.cause_2dgatu$_0 = null;
    this.value = value;
    Kotlin.captureStack(Throwable, this);
    this.name = 'RollbackException';
  }
  Object.defineProperty(RollbackException.prototype, 'message', {
    get: function () {
      return this.message_11bw3w$_0;
    }
  });
  Object.defineProperty(RollbackException.prototype, 'cause', {
    get: function () {
      return this.cause_2dgatu$_0;
    }
  });
  RollbackException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RollbackException',
    interfaces: [Throwable]
  };
  function TransactionWrapper(transaction) {
    this.transaction = transaction;
  }
  TransactionWrapper.prototype.rollback = function () {
    this.transaction.checkThreadConfinement_8be2vx$();
    throw new RollbackException();
  };
  TransactionWrapper.prototype.rollback_11rb$ = function (returnValue) {
    this.transaction.checkThreadConfinement_8be2vx$();
    throw new RollbackException(returnValue);
  };
  TransactionWrapper.prototype.afterCommit_o14v8n$ = function (function_0) {
    this.transaction.afterCommit_o14v8n$(function_0);
  };
  TransactionWrapper.prototype.afterRollback_o14v8n$ = function (function_0) {
    this.transaction.afterRollback_o14v8n$(function_0);
  };
  TransactionWrapper.prototype.transaction_2n8jvj$ = function (body) {
    ensureNotNull(this.transaction.transacter_8be2vx$).transaction_oxxknm$(false, body);
  };
  TransactionWrapper.prototype.transaction_4ggxus$ = function (body) {
    return ensureNotNull(this.transaction.transacter_8be2vx$).transactionWithResult_m15s25$(false, body);
  };
  TransactionWrapper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransactionWrapper',
    interfaces: [TransactionWithReturn, TransactionWithoutReturn]
  };
  function TransacterImpl(driver) {
    this.driver_f3t1d3$_0 = driver;
  }
  TransacterImpl.prototype.notifyQueries_y0kj9x$ = function (identifier, queryList) {
    var transaction = this.driver_f3t1d3$_0.currentTransaction();
    if (transaction != null) {
      if (!transaction.queriesFuncs_8be2vx$.containsKey_11rb$(identifier)) {
        transaction.queriesFuncs_8be2vx$.put_xwzc9p$(identifier, queryList);
      }} else {
      var tmp$;
      tmp$ = queryList().iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        element.notifyDataChanged();
      }
    }
  };
  TransacterImpl.prototype.createArguments_za3lpa$ = function (count) {
    if (count === 0)
      return '()';
    var $receiver = StringBuilder_init(count + 2 | 0);
    $receiver.append_pdl1vj$('(?');
    var times = count - 1 | 0;
    for (var index = 0; index < times; index++) {
      $receiver.append_pdl1vj$(',?');
    }
    $receiver.append_s8itvh$(41);
    return $receiver.toString();
  };
  TransacterImpl.prototype.transaction_oxxknm$$default = function (noEnclosing, body) {
    this.transactionWithWrapper_pt33lm$_0(noEnclosing, body);
  };
  TransacterImpl.prototype.transactionWithResult_m15s25$$default = function (noEnclosing, bodyWithReturn) {
    return this.transactionWithWrapper_pt33lm$_0(noEnclosing, bodyWithReturn);
  };
  TransacterImpl.prototype.transactionWithWrapper_pt33lm$_0 = function (noEnclosing, wrapperBody) {
    var tmp$, tmp$_0;
    var transaction = this.driver_f3t1d3$_0.newTransaction();
    var enclosing = transaction.enclosingTransaction_8be2vx$();
    if (!(enclosing == null || !noEnclosing)) {
      var message = 'Already in a transaction';
      throw IllegalStateException_init(message.toString());
    }var thrownException = {v: null};
    var returnValue = null;
    try {
      transaction.transacter_8be2vx$ = this;
      returnValue = wrapperBody(new TransactionWrapper(transaction));
      transaction.successful_8be2vx$ = true;
    } catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        thrownException.v = e;
      } else
        throw e;
    }
    finally {
      transaction.endTransaction_8be2vx$();
      if (enclosing == null) {
        if (!transaction.successful_8be2vx$ || !transaction.childrenSuccessful_8be2vx$) {
          try {
            var tmp$_1;
            tmp$_1 = transaction.postRollbackHooks_8be2vx$.iterator();
            while (tmp$_1.hasNext()) {
              var element = tmp$_1.next();
              element();
            }
          } catch (rollbackException) {
            if (Kotlin.isType(rollbackException, Throwable)) {
              if (thrownException.v != null) {
                var closure$rollbackException = rollbackException;
                throw Kotlin.newThrowable('Exception while rolling back from an exception.' + '\n' + 'Original exception: ' + toString(thrownException.v) + '\n' + 'with cause ' + toString(thrownException.v.cause) + '\n' + '\n' + 'Rollback exception: ' + closure$rollbackException, closure$rollbackException);
              }throw rollbackException;
            } else
              throw rollbackException;
          }
          transaction.postRollbackHooks_8be2vx$.clear();
        } else {
          var $receiver = transaction.queriesFuncs_8be2vx$;
          var destination = ArrayList_init();
          var tmp$_2;
          tmp$_2 = $receiver.entries.iterator();
          while (tmp$_2.hasNext()) {
            var element_0 = tmp$_2.next();
            var queryListSupplier = element_0.value;
            var list = queryListSupplier();
            addAll(destination, list);
          }
          var tmp$_3;
          tmp$_3 = distinct(destination).iterator();
          while (tmp$_3.hasNext()) {
            var element_1 = tmp$_3.next();
            element_1.notifyDataChanged();
          }
          transaction.queriesFuncs_8be2vx$.clear();
          var tmp$_4;
          tmp$_4 = transaction.postCommitHooks_8be2vx$.iterator();
          while (tmp$_4.hasNext()) {
            var element_2 = tmp$_4.next();
            element_2();
          }
          transaction.postCommitHooks_8be2vx$.clear();
        }
      } else {
        enclosing.childrenSuccessful_8be2vx$ = (transaction.successful_8be2vx$ && transaction.childrenSuccessful_8be2vx$);
        enclosing.postCommitHooks_8be2vx$.addAll_brywnq$(transaction.postCommitHooks_8be2vx$);
        enclosing.postRollbackHooks_8be2vx$.addAll_brywnq$(transaction.postRollbackHooks_8be2vx$);
        enclosing.queriesFuncs_8be2vx$.putAll_a2k3zr$(transaction.queriesFuncs_8be2vx$);
      }
      if (enclosing == null && Kotlin.isType(thrownException.v, RollbackException)) {
        return (tmp$ = thrownException.v.value) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
      } else if (thrownException.v != null) {
        throw thrownException.v;
      } else {
        return (tmp$_0 = returnValue) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
      }
    }
  };
  TransacterImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransacterImpl',
    interfaces: [Transacter]
  };
  function SqlCursor() {
  }
  SqlCursor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SqlCursor',
    interfaces: [Closeable]
  };
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function SqlDriver() {
  }
  SqlDriver.prototype.executeQuery_y7hrwn$ = function (identifier, sql, parameters, binders, callback$default) {
    if (binders === void 0)
      binders = null;
    return callback$default ? callback$default(identifier, sql, parameters, binders) : this.executeQuery_y7hrwn$$default(identifier, sql, parameters, binders);
  };
  SqlDriver.prototype.execute_y7hrwn$ = function (identifier, sql, parameters, binders, callback$default) {
    if (binders === void 0)
      binders = null;
    callback$default ? callback$default(identifier, sql, parameters, binders) : this.execute_y7hrwn$$default(identifier, sql, parameters, binders);
  };
  function SqlDriver$Schema() {
  }
  SqlDriver$Schema.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Schema',
    interfaces: []
  };
  SqlDriver.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SqlDriver',
    interfaces: [Closeable]
  };
  function AfterVersion(afterVersion, block) {
    this.afterVersion_8be2vx$ = afterVersion;
    this.block_8be2vx$ = block;
  }
  AfterVersion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AfterVersion',
    interfaces: []
  };
  function AfterVersionWithDriver(afterVersion, block) {
    this.afterVersion_8be2vx$ = afterVersion;
    this.block_8be2vx$ = block;
  }
  AfterVersionWithDriver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AfterVersionWithDriver',
    interfaces: []
  };
  function toAfterVersionWithDriver$lambda(this$toAfterVersionWithDriver) {
    return function (it) {
      this$toAfterVersionWithDriver.block_8be2vx$();
      return Unit;
    };
  }
  function toAfterVersionWithDriver($receiver) {
    return new AfterVersionWithDriver($receiver.afterVersion_8be2vx$, toAfterVersionWithDriver$lambda($receiver));
  }
  function migrateWithCallbacks($receiver, driver, oldVersion, newVersion, callbacks) {
    var destination = ArrayList_init_0(callbacks.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== callbacks.length; ++tmp$) {
      var item = callbacks[tmp$];
      destination.add_11rb$(toAfterVersionWithDriver(item));
    }
    var wrappedCallbacks = copyToArray(destination);
    migrateWithCallbacks_0($receiver, driver, oldVersion, newVersion, wrappedCallbacks.slice());
  }
  function migrateWithCallbacks$lambda(it) {
    return it.afterVersion_8be2vx$;
  }
  function migrateWithCallbacks_0($receiver, driver, oldVersion, newVersion, callbacks) {
    var lastVersion = {v: oldVersion};
    var destination = ArrayList_init();
    var tmp$;
    for (tmp$ = 0; tmp$ !== callbacks.length; ++tmp$) {
      var element = callbacks[tmp$];
      var tmp$_0;
      tmp$_0 = element.afterVersion_8be2vx$;
      if (oldVersion <= tmp$_0 && tmp$_0 < newVersion)
        destination.add_11rb$(element);
    }
    var tmp$_1;
    tmp$_1 = sortedWith(destination, new Comparator(compareBy$lambda(migrateWithCallbacks$lambda))).iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      $receiver.migrate_gxi64k$(driver, lastVersion.v, element_0.afterVersion_8be2vx$ + 1 | 0);
      element_0.block_8be2vx$(driver);
      lastVersion.v = element_0.afterVersion_8be2vx$ + 1 | 0;
    }
    if (lastVersion.v < newVersion) {
      $receiver.migrate_gxi64k$(driver, lastVersion.v, newVersion);
    }}
  function SqlPreparedStatement() {
  }
  SqlPreparedStatement.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'SqlPreparedStatement',
    interfaces: []
  };
  function getValue($receiver, thisRef, prop) {
    return $receiver.get();
  }
  function setValue($receiver, thisRef, prop, value) {
    $receiver.set_11rb$(value);
  }
  function getValue_0($receiver, thisRef, prop) {
    return $receiver.get();
  }
  function setValue_0($receiver, thisRef, prop, value) {
    $receiver.set_11rb$(value);
  }
  function LogSqliteDriver(sqlDriver, logger) {
    this.sqlDriver_0 = sqlDriver;
    this.logger_0 = logger;
  }
  LogSqliteDriver.prototype.currentTransaction = function () {
    return this.sqlDriver_0.currentTransaction();
  };
  LogSqliteDriver.prototype.execute_y7hrwn$$default = function (identifier, sql, parameters, binders) {
    this.logger_0('EXECUTE' + '\n' + ' ' + sql);
    this.logParameters_0(binders);
    this.sqlDriver_0.execute_y7hrwn$(identifier, sql, parameters, binders);
  };
  LogSqliteDriver.prototype.executeQuery_y7hrwn$$default = function (identifier, sql, parameters, binders) {
    this.logger_0('QUERY' + '\n' + ' ' + sql);
    this.logParameters_0(binders);
    return this.sqlDriver_0.executeQuery_y7hrwn$(identifier, sql, parameters, binders);
  };
  function LogSqliteDriver$newTransaction$lambda(this$LogSqliteDriver) {
    return function () {
      this$LogSqliteDriver.logger_0('TRANSACTION COMMIT');
      return Unit;
    };
  }
  function LogSqliteDriver$newTransaction$lambda_0(this$LogSqliteDriver) {
    return function () {
      this$LogSqliteDriver.logger_0('TRANSACTION ROLLBACK');
      return Unit;
    };
  }
  LogSqliteDriver.prototype.newTransaction = function () {
    this.logger_0('TRANSACTION BEGIN');
    var transaction = this.sqlDriver_0.newTransaction();
    transaction.afterCommit_o14v8n$(LogSqliteDriver$newTransaction$lambda(this));
    transaction.afterRollback_o14v8n$(LogSqliteDriver$newTransaction$lambda_0(this));
    return transaction;
  };
  LogSqliteDriver.prototype.close = function () {
    this.logger_0('CLOSE CONNECTION');
    this.sqlDriver_0.close();
  };
  LogSqliteDriver.prototype.logParameters_0 = function (binders) {
    if (binders != null) {
      var parametersInterceptor = new StatementParameterInterceptor();
      binders(parametersInterceptor);
      var logParameters = parametersInterceptor.getAndClearParameters();
      if (!logParameters.isEmpty())
        this.logger_0(' ' + logParameters);
    }};
  LogSqliteDriver.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogSqliteDriver',
    interfaces: [SqlDriver]
  };
  function StatementParameterInterceptor() {
    this.values_0 = ArrayList_init();
  }
  StatementParameterInterceptor.prototype.bindBytes_z5wsk1$ = function (index, bytes) {
    this.values_0.add_11rb$(bytes);
  };
  StatementParameterInterceptor.prototype.bindDouble_tvwy6j$ = function (index, double) {
    this.values_0.add_11rb$(double);
  };
  StatementParameterInterceptor.prototype.bindLong_280ow0$ = function (index, long) {
    this.values_0.add_11rb$(long);
  };
  StatementParameterInterceptor.prototype.bindString_vqvrqt$ = function (index, string) {
    this.values_0.add_11rb$(string);
  };
  StatementParameterInterceptor.prototype.getAndClearParameters = function () {
    var list = toList(this.values_0);
    this.values_0.clear();
    return list;
  };
  StatementParameterInterceptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StatementParameterInterceptor',
    interfaces: [SqlPreparedStatement]
  };
  function Closeable() {
  }
  Closeable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Closeable',
    interfaces: []
  };
  var use = defineInlineFunction('sqldelight-runtime-js-legacy.com.squareup.sqldelight.db.use_hcg30c$', wrapFunction(function () {
    var Throwable = Error;
    return function ($receiver, body) {
      var exception = null;
      try {
        return body($receiver);
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          exception = e;
          throw e;
        } else
          throw e;
      }
      finally {
        if ($receiver != null)
          if (exception == null)
            $receiver.close();
          else
            try {
              $receiver.close();
            } catch (closeException) {
              if (!Kotlin.isType(closeException, Throwable))
                throw closeException;
            }
      }
    };
  }));
  function Atomic(value) {
    this.value_rzmcs9$_0 = value;
  }
  Atomic.prototype.get = function () {
    return this.value_rzmcs9$_0;
  };
  Atomic.prototype.set_11rb$ = function (value) {
    this.value_rzmcs9$_0 = value;
  };
  Atomic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Atomic',
    interfaces: []
  };
  function AtomicBoolean(value) {
    Atomic.call(this, value);
  }
  AtomicBoolean.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicBoolean',
    interfaces: [Atomic]
  };
  function copyOnWriteList() {
    return ArrayList_init();
  }
  function copyOnWriteList_0() {
    return ArrayList_init();
  }
  function QueryLock() {
  }
  QueryLock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QueryLock',
    interfaces: []
  };
  var withLock = defineInlineFunction('sqldelight-runtime-js-legacy.com.squareup.sqldelight.internal.withLock_hcv47m$', function ($receiver, block) {
    return block();
  });
  function currentThreadId() {
    return L0;
  }
  var package$com = _.com || (_.com = {});
  var package$squareup = package$com.squareup || (package$com.squareup = {});
  var package$sqldelight = package$squareup.sqldelight || (package$squareup.sqldelight = {});
  package$sqldelight.ColumnAdapter = ColumnAdapter;
  package$sqldelight.EnumColumnAdapter = EnumColumnAdapter;
  package$sqldelight.Query_gya3xh$ = Query;
  package$sqldelight.Query_79dncn$ = Query_0;
  $$importsForInline$$['sqldelight-runtime-js-legacy'] = _;
  Query_1.Listener = Query$Listener;
  package$sqldelight.Query = Query_1;
  package$sqldelight.TransactionCallbacks = TransactionCallbacks;
  package$sqldelight.TransactionWithReturn = TransactionWithReturn;
  package$sqldelight.TransactionWithoutReturn = TransactionWithoutReturn;
  Transacter.Transaction = Transacter$Transaction;
  package$sqldelight.Transacter = Transacter;
  package$sqldelight.TransacterImpl = TransacterImpl;
  var package$db = package$sqldelight.db || (package$sqldelight.db = {});
  package$db.SqlCursor = SqlCursor;
  SqlDriver.Schema = SqlDriver$Schema;
  package$db.SqlDriver = SqlDriver;
  package$db.AfterVersion = AfterVersion;
  package$db.AfterVersionWithDriver = AfterVersionWithDriver;
  package$db.toAfterVersionWithDriver_1d48ox$ = toAfterVersionWithDriver;
  package$db.migrateWithCallbacks_54o8b3$ = migrateWithCallbacks;
  package$db.migrateWithCallbacks_xow1bx$ = migrateWithCallbacks_0;
  package$db.SqlPreparedStatement = SqlPreparedStatement;
  var package$internal = package$sqldelight.internal || (package$sqldelight.internal = {});
  package$internal.getValue_1g55c6$ = getValue;
  package$internal.setValue_t65kr1$ = setValue;
  package$internal.getValue_2rmcur$ = getValue_0;
  package$internal.setValue_vi8ix9$ = setValue_0;
  var package$logs = package$sqldelight.logs || (package$sqldelight.logs = {});
  package$logs.LogSqliteDriver = LogSqliteDriver;
  package$logs.StatementParameterInterceptor = StatementParameterInterceptor;
  package$db.Closeable = Closeable;
  package$db.use_hcg30c$ = use;
  package$internal.Atomic = Atomic;
  package$internal.AtomicBoolean = AtomicBoolean;
  package$internal.copyOnWriteList = copyOnWriteList;
  package$internal.copyOnWriteList_tnbmyv$ = copyOnWriteList_0;
  package$internal.QueryLock = QueryLock;
  package$internal.withLock_hcv47m$ = withLock;
  package$internal.currentThreadId_8be2vx$ = currentThreadId;
  TransacterImpl.prototype.transaction_oxxknm$ = Transacter.prototype.transaction_oxxknm$;
  TransacterImpl.prototype.transactionWithResult_m15s25$ = Transacter.prototype.transactionWithResult_m15s25$;
  LogSqliteDriver.prototype.execute_y7hrwn$ = SqlDriver.prototype.execute_y7hrwn$;
  LogSqliteDriver.prototype.executeQuery_y7hrwn$ = SqlDriver.prototype.executeQuery_y7hrwn$;
  Kotlin.defineModule('sqldelight-runtime-js-legacy', _);
  return _;
}));

//# sourceMappingURL=sqldelight-runtime-js-legacy.js.map
