package com.shabinder.common.database

import com.squareup.sqldelight.Query
import com.squareup.sqldelight.Transacter
import kotlin.Any
import kotlin.Long
import kotlin.String
import kotlin.Unit

public interface DownloadRecordDatabaseQueries : Transacter {
  public fun <T : Any> selectAll(mapper: (
    id: Long,
    type: String,
    name: String,
    link: String,
    coverUrl: String,
    totalFiles: Long
  ) -> T): Query<T>

  public fun selectAll(): Query<DownloadRecord>

  public fun <T : Any> select(link: String, mapper: (
    id: Long,
    type: String,
    name: String,
    link: String,
    coverUrl: String,
    totalFiles: Long
  ) -> T): Query<T>

  public fun select(link: String): Query<DownloadRecord>

  public fun getLastInsertId(): Query<Long>

  public fun add(
    type: String,
    name: String,
    link: String,
    coverUrl: String,
    totalFiles: Long
  ): Unit

  public fun delete(link: String): Unit

  public fun clear(): Unit
}
