package com.shabinder.common.database

import kotlin.Long
import kotlin.String

public data class DownloadRecord(
  public val id: Long,
  public val type: String,
  public val name: String,
  public val link: String,
  public val coverUrl: String,
  public val totalFiles: Long
) {
  public override fun toString(): String = """
  |DownloadRecord [
  |  id: $id
  |  type: $type
  |  name: $name
  |  link: $link
  |  coverUrl: $coverUrl
  |  totalFiles: $totalFiles
  |]
  """.trimMargin()
}
