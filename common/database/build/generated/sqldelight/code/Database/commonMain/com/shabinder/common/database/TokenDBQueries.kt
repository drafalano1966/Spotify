package com.shabinder.common.database

import com.squareup.sqldelight.Query
import com.squareup.sqldelight.Transacter
import kotlin.Any
import kotlin.Long
import kotlin.String
import kotlin.Unit

public interface TokenDBQueries : Transacter {
  public fun <T : Any> select(mapper: (
    tokenIndex: Long,
    accessToken: String,
    expiry: Long
  ) -> T): Query<T>

  public fun select(): Query<Token>

  public fun add(accessToken: String, expiry: Long): Unit

  public fun clear(): Unit
}
