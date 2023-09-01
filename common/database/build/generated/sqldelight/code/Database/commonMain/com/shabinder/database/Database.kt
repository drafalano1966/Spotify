package com.shabinder.database

import com.shabinder.common.database.DownloadRecordDatabaseQueries
import com.shabinder.common.database.TokenDBQueries
import com.shabinder.database.database.newInstance
import com.shabinder.database.database.schema
import com.squareup.sqldelight.Transacter
import com.squareup.sqldelight.db.SqlDriver

public interface Database : Transacter {
  public val downloadRecordDatabaseQueries: DownloadRecordDatabaseQueries

  public val tokenDBQueries: TokenDBQueries

  public companion object {
    public val Schema: SqlDriver.Schema
      get() = Database::class.schema

    public operator fun invoke(driver: SqlDriver): Database = Database::class.newInstance(driver)
  }
}
