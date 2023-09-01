package com.shabinder.database.database

import com.shabinder.common.database.DownloadRecord
import com.shabinder.common.database.DownloadRecordDatabaseQueries
import com.shabinder.common.database.Token
import com.shabinder.common.database.TokenDBQueries
import com.shabinder.database.Database
import com.squareup.sqldelight.Query
import com.squareup.sqldelight.TransacterImpl
import com.squareup.sqldelight.`internal`.copyOnWriteList
import com.squareup.sqldelight.db.SqlCursor
import com.squareup.sqldelight.db.SqlDriver
import kotlin.Any
import kotlin.Int
import kotlin.Long
import kotlin.String
import kotlin.Unit
import kotlin.collections.MutableList
import kotlin.reflect.KClass

internal val KClass<Database>.schema: SqlDriver.Schema
  get() = DatabaseImpl.Schema

internal fun KClass<Database>.newInstance(driver: SqlDriver): Database = DatabaseImpl(driver)

private class DatabaseImpl(
  driver: SqlDriver
) : TransacterImpl(driver), Database {
  public override val downloadRecordDatabaseQueries: DownloadRecordDatabaseQueriesImpl =
      DownloadRecordDatabaseQueriesImpl(this, driver)

  public override val tokenDBQueries: TokenDBQueriesImpl = TokenDBQueriesImpl(this, driver)

  public object Schema : SqlDriver.Schema {
    public override val version: Int
      get() = 1

    public override fun create(driver: SqlDriver): Unit {
      driver.execute(null, """
          |CREATE TABLE IF NOT EXISTS DownloadRecord (
          |    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
          |    type TEXT NOT NULL,
          |    name TEXT NOT NULL,
          |    link TEXT NOT NULL UNIQUE ON CONFLICT REPLACE ,
          |    coverUrl TEXT NOT NULL,
          |    totalFiles INTEGER NOT NULL DEFAULT 1
          |)
          """.trimMargin(), 0)
      driver.execute(null, """
          |CREATE TABLE IF NOT EXISTS Token (
          |    tokenIndex INTEGER NOT NULL PRIMARY KEY ON CONFLICT REPLACE,
          |    accessToken TEXT NOT NULL,
          |    expiry INTEGER NOT NULL
          |)
          """.trimMargin(), 0)
    }

    public override fun migrate(
      driver: SqlDriver,
      oldVersion: Int,
      newVersion: Int
    ): Unit {
    }
  }
}

private class DownloadRecordDatabaseQueriesImpl(
  private val database: DatabaseImpl,
  private val driver: SqlDriver
) : TransacterImpl(driver), DownloadRecordDatabaseQueries {
  internal val selectAll: MutableList<Query<*>> = copyOnWriteList()

  internal val select: MutableList<Query<*>> = copyOnWriteList()

  internal val getLastInsertId: MutableList<Query<*>> = copyOnWriteList()

  public override fun <T : Any> selectAll(mapper: (
    id: Long,
    type: String,
    name: String,
    link: String,
    coverUrl: String,
    totalFiles: Long
  ) -> T): Query<T> = Query(959192386, selectAll, driver, "DownloadRecordDatabase.sq", "selectAll",
      """
  |SELECT *
  |FROM DownloadRecord
  """.trimMargin()) { cursor ->
    mapper(
      cursor.getLong(0)!!,
      cursor.getString(1)!!,
      cursor.getString(2)!!,
      cursor.getString(3)!!,
      cursor.getString(4)!!,
      cursor.getLong(5)!!
    )
  }

  public override fun selectAll(): Query<DownloadRecord> = selectAll { id, type, name, link,
      coverUrl, totalFiles ->
    DownloadRecord(
      id,
      type,
      name,
      link,
      coverUrl,
      totalFiles
    )
  }

  public override fun <T : Any> select(link: String, mapper: (
    id: Long,
    type: String,
    name: String,
    link: String,
    coverUrl: String,
    totalFiles: Long
  ) -> T): Query<T> = SelectQuery(link) { cursor ->
    mapper(
      cursor.getLong(0)!!,
      cursor.getString(1)!!,
      cursor.getString(2)!!,
      cursor.getString(3)!!,
      cursor.getString(4)!!,
      cursor.getLong(5)!!
    )
  }

  public override fun select(link: String): Query<DownloadRecord> = select(link) { id, type, name,
      link_, coverUrl, totalFiles ->
    DownloadRecord(
      id,
      type,
      name,
      link_,
      coverUrl,
      totalFiles
    )
  }

  public override fun getLastInsertId(): Query<Long> = Query(1229485405, getLastInsertId, driver,
      "DownloadRecordDatabase.sq", "getLastInsertId", "SELECT last_insert_rowid()") { cursor ->
    cursor.getLong(0)!!
  }

  public override fun add(
    type: String,
    name: String,
    link: String,
    coverUrl: String,
    totalFiles: Long
  ): Unit {
    driver.execute(-747672418, """
    |INSERT OR REPLACE INTO DownloadRecord (type, name, link, coverUrl, totalFiles)
    |VALUES (?,?,?,?,?)
    """.trimMargin(), 5) {
      bindString(1, type)
      bindString(2, name)
      bindString(3, link)
      bindString(4, coverUrl)
      bindLong(5, totalFiles)
    }
    notifyQueries(-747672418, {database.downloadRecordDatabaseQueries.select +
        database.downloadRecordDatabaseQueries.selectAll})
  }

  public override fun delete(link: String): Unit {
    driver.execute(-121457522, """
    |DELETE FROM DownloadRecord
    |WHERE link = ?
    """.trimMargin(), 1) {
      bindString(1, link)
    }
    notifyQueries(-121457522, {database.downloadRecordDatabaseQueries.select +
        database.downloadRecordDatabaseQueries.selectAll})
  }

  public override fun clear(): Unit {
    driver.execute(-1251565814, """DELETE FROM DownloadRecord""", 0)
    notifyQueries(-1251565814, {database.downloadRecordDatabaseQueries.select +
        database.downloadRecordDatabaseQueries.selectAll})
  }

  private inner class SelectQuery<out T : Any>(
    public val link: String,
    mapper: (SqlCursor) -> T
  ) : Query<T>(select, mapper) {
    public override fun execute(): SqlCursor = driver.executeQuery(307979231, """
    |SELECT *
    |FROM DownloadRecord
    |WHERE link = ?
    """.trimMargin(), 1) {
      bindString(1, link)
    }

    public override fun toString(): String = "DownloadRecordDatabase.sq:select"
  }
}

private class TokenDBQueriesImpl(
  private val database: DatabaseImpl,
  private val driver: SqlDriver
) : TransacterImpl(driver), TokenDBQueries {
  internal val select: MutableList<Query<*>> = copyOnWriteList()

  public override fun <T : Any> select(mapper: (
    tokenIndex: Long,
    accessToken: String,
    expiry: Long
  ) -> T): Query<T> = Query(-1673630048, select, driver, "TokenDB.sq", "select", """
  |SELECT * FROM Token
  |WHERE tokenIndex = 0
  """.trimMargin()) { cursor ->
    mapper(
      cursor.getLong(0)!!,
      cursor.getString(1)!!,
      cursor.getLong(2)!!
    )
  }

  public override fun select(): Query<Token> = select { tokenIndex, accessToken, expiry ->
    Token(
      tokenIndex,
      accessToken,
      expiry
    )
  }

  public override fun add(accessToken: String, expiry: Long): Unit {
    driver.execute(1454457213, """
    |INSERT OR REPLACE INTO Token (tokenIndex,accessToken,expiry)
    |VALUES (0,?,?)
    """.trimMargin(), 2) {
      bindString(1, accessToken)
      bindLong(2, expiry)
    }
    notifyQueries(1454457213, {database.tokenDBQueries.select})
  }

  public override fun clear(): Unit {
    driver.execute(1871099945, """DELETE FROM Token""", 0)
    notifyQueries(1871099945, {database.tokenDBQueries.select})
  }
}
